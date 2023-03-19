import { useEffect } from "react";
import { getGroceryDetails } from "../services/service";
import { GroceryItemProps } from "../interfaces/Interfaces";

// custom hook for getting grocery details
export default function useGroceryDetails(item:GroceryItemProps, callback : Function){
    useEffect(() => {
        if(!item.imageUrl){
            getGroceryDetails(item.name).then((response) => {
                callback(response);
            }).catch((error) => {
                console.log("no grocery found", error);
            });
        }
    });
}