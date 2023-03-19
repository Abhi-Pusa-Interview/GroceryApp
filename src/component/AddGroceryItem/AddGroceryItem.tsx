import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import {Paper} from "@mui/material";
import { filterData } from "../../utils/utils";
import useSearchQuery  from "../../hooks/useSearchQuery";
import  useFoodItemListConverter  from "../../hooks/useFoodItemListConverter";

interface AddGroceryItemProps {
    handleAddItem: Function
}

export default function AddGroceryItem({handleAddItem}:AddGroceryItemProps) {
    const {searchQuery,updateSearchQuery} = useSearchQuery();
    const {data} = useFoodItemListConverter();
    const dataFiltered = filterData(searchQuery, data);

    const onClickHandler = (e:React.MouseEvent<HTMLDivElement>) => {
        handleAddItem(e.currentTarget.id);
    };
  
    return (
      <Paper
        elevation={3}
        data-testid="add-grocery-paper"
        style={{
          display: "flex",
          alignSelf: "center",
          justifyContent: "center",
          flexDirection: "column",
          margin: 10,
          padding: 20
        }}
      >
        <SearchBar searchQuery={searchQuery} setSearchQuery={updateSearchQuery} />
        <div style={{ padding: 3 }} >
          {dataFiltered.map((d:any) => (
            <div
            data-testid="matched-grocery-list"
              onClick={onClickHandler}
              style={{
                padding: 5,
                justifyContent: "normal",
                fontSize: 20,
                margin: 1,
                width: "250px",
                borderWidth: "10px"
              }}
              key={d}
              id={d}
            >
              {d}
            </div>
          ))}
        </div>
      </Paper>
    );
  }