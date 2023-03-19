import React from "react";
import SortIcon from '@mui/icons-material/Sort';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import {Box, Button, Tooltip} from "@mui/material";
import { toCamelCase } from "../../utils/utils";

interface SortGroceryListProps {
    sortListItems: (type:string) => void
}

const btnStyle = {
    border:"none",
    ":hover":{
        border: "none"
    }
}

export const btnList = ["name","quantity"];
const BtnMap = {
    "name": <SortByAlphaIcon /> ,
    "quantity": <SortIcon /> 
}

export default function SortGroceryList({sortListItems}:SortGroceryListProps) {
    const clickHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
        sortListItems(e.currentTarget.id);
    }
    
    return (<Box sx={{textAlign:"right"}} data-testid="box-wrapper">
        {btnList.map((b:any) => {
            return(
                <Tooltip key={b} title={`Sort by ${toCamelCase(b)}`} data-testid="sort-tooltip">
                    <Button data-testid={b} key={b} id={b} sx={btnStyle} variant="outlined" onClick={clickHandler}>
                        {BtnMap[b as keyof typeof BtnMap]}
                    </Button>
                </Tooltip>
            )
        })}
    </Box>)
}