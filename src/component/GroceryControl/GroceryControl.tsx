import React from "react";
import { Button, Box } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Tooltip from '@mui/material/Tooltip';

interface GroceryControlProps {
    handleAddItem : Function,
    handleDeleteItem : Function
}

const btnStyle = {
    border: "none",
    ":hover":{
        border:"none"
    }
}

const iconStyle = {
    height: "50px",
    width: "50px",
}

export default function GroceryControl({handleAddItem, handleDeleteItem} : GroceryControlProps){
    return (<Box data-testid="wrapper-box" sx={{
        position: "fixed",
        bottom: "0px",
        textAlign: "center",
        width: "100%",
        marginLeft: {
            xs: "-5px",
            md: "-30px"
        },
        background:"rgba(0,0,0,0.2)",
        borderRadius: "7px 7px 0px 0px"
    }}>
        <Tooltip title="Add Item">
            <Button sx={btnStyle} variant="outlined" id="add_item" data-testid="add-item-btn"
                onClick={(e:React.MouseEvent<HTMLButtonElement>) => handleAddItem(e.currentTarget.id)}>
                    <AddCircleIcon sx={iconStyle} data-testid="add-item-icon" />
            </Button>
        </Tooltip>
       <Tooltip title="Remove All">
            <Button sx={btnStyle} variant="outlined" id="remove_all" data-testid="remove-all-btn"
                onClick={(e:React.MouseEvent<HTMLButtonElement>) => handleDeleteItem(e.currentTarget.id)}>
                    <RemoveCircleIcon sx={iconStyle} data-testid="remove-all-icon" />
            </Button>
       </Tooltip>
       
    </Box>)
}