import  { foodItemList }  from "../constants/constants";
import { FoodItem } from "../interfaces/Interfaces";

export default function useFoodItemListConverter(){
    let data:Array<string> = [];
    foodItemList.map((item:FoodItem) => {
        data.push(item.name);
        return 0;
    });
    return {data};
}