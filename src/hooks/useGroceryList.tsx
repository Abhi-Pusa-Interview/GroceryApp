import {useState} from "react";
import { GroceryItemProps,FoodItem } from "../interfaces/Interfaces";
import { foodItemList } from "../constants/constants";
import { getGroceryListFromLocalStorage,updateGroceryListInLocalStorage } from "../services/service";

export default function useGroceryList(){
    
    const [groceryList, setGroceryList] = useState<Array<GroceryItemProps>>(getGroceryListFromLocalStorage());

    const getGroceryItem = (name:string) => groceryList.find((item:GroceryItemProps) => item.name === name);

    const getGroceryItemIndex = (name:string) => groceryList.findIndex((item:GroceryItemProps) => item.name === name);

    const saveGroceryList = (list : Array<GroceryItemProps>) => {
        updateGroceryListInLocalStorage(list);
        setGroceryList(list);
    }

    const getSortedGroceryList = (groceryList:Array<GroceryItemProps>,type: string,reverse:boolean) => {
        const newGroceryList = [...groceryList];
        newGroceryList.sort((a:GroceryItemProps,b:GroceryItemProps) => {
            if(a[type as keyof GroceryItemProps] > b[type as keyof GroceryItemProps]){
                return reverse?-1:1;
            }
            if(a[type as keyof GroceryItemProps] < b[type as keyof GroceryItemProps]){
                return reverse?1:-1;
            }
            return 0;
        });
        return newGroceryList;
    }

    const addItemGroceryList = (groceryItemName : string) => {
        if(!getGroceryItem(groceryItemName)){
            let findFoodItem : Array<FoodItem> = foodItemList.filter((item:FoodItem) => item.name === groceryItemName);
            let newGroceryItem : GroceryItemProps = {
                name:findFoodItem[0].name,
                favourite: 0,
                unitOfMeasurement: findFoodItem[0].unitOfMeasurement,
                unitPrice: findFoodItem[0].unitPrice,
                quantity: 1,
                imageUrl: "",
                description : ""
            };
            let newGroceryList = [...groceryList,newGroceryItem];
            saveGroceryList(getSortedGroceryList(newGroceryList,"favourite",true));
        }
    }

    const updateGroceryItem = (item: GroceryItemProps,sort:boolean) => {
        let index = getGroceryItemIndex(item.name);
        let newGroceryList = [...groceryList];
        if(index !== -1){
            newGroceryList[index] = item;
            
        }else{
            newGroceryList.push(item);
        }
        newGroceryList = sort ? getSortedGroceryList(newGroceryList,"favourite",true) : newGroceryList;
        saveGroceryList(newGroceryList);
    }

    const removeItemGroceryList = (name:string) => {
        let newGroceryList = groceryList.filter((groceryItem: GroceryItemProps) => groceryItem.name !== name);
        saveGroceryList(getSortedGroceryList(newGroceryList,"favourite",true));
    }

    const removeAllItems = () => {
        saveGroceryList([]);
    }

    const sortGroceryList = (type: string) => {
        saveGroceryList(getSortedGroceryList(groceryList,type,true));
    }

    return {groceryList,addItemGroceryList,updateGroceryItem,removeItemGroceryList,removeAllItems,sortGroceryList};
}