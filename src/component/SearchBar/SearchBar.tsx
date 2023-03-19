import React,{ChangeEvent} from "react";
import { TextField } from "@mui/material";

export default function SearchBar({setSearchQuery}:any){
    return(
        <form>
        <TextField
            sx={{width: "100%"}}
            id="search-bar"
            data-testid="search-bar"
            className="text"
            variant="filled"
            onInput={(e: ChangeEvent<HTMLInputElement>) => {
                setSearchQuery(e.target.value);
            }}
            placeholder="Search Items To Add... "
            size="small"
        />
        </form>
    )
};