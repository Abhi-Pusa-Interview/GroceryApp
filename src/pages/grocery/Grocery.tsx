import React,{memo, useState} from "react";
import useGroceryList from "../../hooks/useGroceryList";
import {Box} from "@mui/material";
import List from "../../component/List/List";
import GroceryItem from "../../component/GroceryItem/GroceryItem";
import GroceryControl from "../../component/GroceryControl/GroceryControl";
import AddGroceryItem from "../../component/AddGroceryItem/AddGroceryItem";
import SortGroceryList  from "../../component/SortGroceryList/SortGroceryList";

const Grocery = () => {
    const {groceryList,addItemGroceryList,updateGroceryItem,removeItemGroceryList,removeAllItems,sortGroceryList} = useGroceryList();
    const [showAddItem, setShowAddItem] = useState<boolean>(false);

    const handleAddItem = (item:string) => {
        addItemGroceryList(item);
        setShowAddItem(false);
    }
    
    return (<Box sx={{
        padding: { xs: "20px 5px", md: "20px 30px" },
        marginBottom: "60px"}}>
        <SortGroceryList sortListItems={sortGroceryList}/>
        <List data={groceryList} Child={GroceryItem} updateGroceryItems={updateGroceryItem} removeGroceryItem={removeItemGroceryList}/>
        {showAddItem && <AddGroceryItem handleAddItem={handleAddItem}/>}
        <GroceryControl handleAddItem={() => setShowAddItem(true)} handleDeleteItem={removeAllItems} />
    </Box>)
}

export default memo(Grocery);