import axios from "axios";
import { GroceryItemProps } from "../interfaces/Interfaces";

export const getGroceryDetails = async (item:string) => {
    const options = {
        method: 'GET',
        url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
        params: {ingr: item},
        headers: {
          'X-RapidAPI-Key': 'fde04ce998msh49354a9a5d72006p13f437jsnad9e784b2d1e',
          'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
    };
    return axios.request(options);
}

export function getGroceryListFromLocalStorage(){
  let groceryList: Array<GroceryItemProps> = JSON.parse(localStorage.getItem("Grocery_list") || "[]");
  return groceryList;
}

export function updateGroceryListInLocalStorage(list: Array<GroceryItemProps>){
  localStorage.setItem("Grocery_list",JSON.stringify(list));
}