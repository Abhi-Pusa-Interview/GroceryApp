import React from "react";
import { GroceryItemProps } from "../../interfaces/Interfaces";
import {Box, Paper, Grid, Typography, Button} from "@mui/material";
import useGroceryDetails from "../../hooks/useGroceryDetails";
import { toCamelCase } from "../../utils/utils";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface GroceryItemComponentProps{
    data: GroceryItemProps,
    updateGroceryItems : (item:GroceryItemProps,sort:boolean) => void,
    removeGroceryItem: (itemname:string) => void
}

const btnStyle ={
    border:"none",
    ":hover":{
        border:"none"
    },
    width:"50px"
};

const iconStyle= {
    marginTop:"-10px", 
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
}

export default function GroceryItem(props:GroceryItemComponentProps) { 
    useGroceryDetails(props.data,(c:any) => {
        let newGroceryItem:GroceryItemProps = props.data;
        newGroceryItem["imageUrl"] = c.data.hints[0].food.image;
        newGroceryItem["description"] = c.data.hints[0].food.category;
        props.updateGroceryItems(newGroceryItem,true);
    });

    const changeQuantity = (e : React.MouseEvent<HTMLButtonElement>) => {
        let newGroceryItem:GroceryItemProps = props.data;
        newGroceryItem["quantity"] = e.currentTarget.id==="increase"?props.data.quantity+1:props.data.quantity===0?0:props.data.quantity-1;
        props.updateGroceryItems(newGroceryItem,false);
    }

    const makeFavourite = () => {
        let newGroceryItem:GroceryItemProps = props.data;
        newGroceryItem["favourite"] = props.data.favourite===0?1:0;
        props.updateGroceryItems(newGroceryItem,true);
    }

    const removeItem = () => {
        props.removeGroceryItem(props.data.name);
    }
    
    return(<div key={props.data.name}>
        <Box
        data-testid="box-wrapper"
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
            m: 1,
            width: "100%"
            },
        }}
        >
            <Paper elevation={3} data-testid="grocery-item-paper">
                <Grid container sx={{height:"150px",paddingTop:"15px"}}>
                    <Grid item xs={1} md={1} sx={iconStyle}>
                        <Button data-testid="favourite-btn" sx={btnStyle} onClick={makeFavourite}>
                            {props.data.favourite === 0? <FavoriteBorderIcon data-testid="favourite-border-icon" />:<FavoriteIcon data-testid="favourite-icon"/>}
                        </Button>
                    </Grid>
                    <Grid item xs={4} md={2}>
                        <img alt="food item" style={{
                            height:"120px",
                            textAlign:"center", 
                            borderRadius: "50%",
                            display: "block",
                            margin: "auto",
                            }} data-testid="grocery-img" src={props.data.imageUrl} />
                    </Grid>
                    <Grid item xs={5} md={7}>
                        <Typography variant="h3">{toCamelCase(props.data.name)}</Typography>
                        <Typography variant="body1">{props.data.description}</Typography>
                        <Typography variant="h4">{props.data.unitPrice}</Typography>
                    </Grid>
                    <Grid item xs={1} md={1} sx={{textAlign:"center"}}>
                        <Button sx={btnStyle} id="increase" data-testid="add-quantity-btn" variant="outlined" onClick={changeQuantity}><AddIcon  data-testid="add-item-icon" /></Button>
                        <Typography variant="h3">
                            {props.data.quantity}<Typography variant="caption">{props.data.unitOfMeasurement}</Typography>
                        </Typography>
                        <Button sx={btnStyle} id="decrease"  data-testid="remove-quantity-btn" variant="outlined" onClick={changeQuantity}><RemoveIcon  data-testid="remove-item-icon"/></Button>
                    </Grid>
                    <Grid item xs={1} md={1} sx={iconStyle}>
                        <Button sx={btnStyle} variant="outlined"  data-testid="delete-item-btn" onClick={removeItem}><CloseIcon data-testid="delete-item-icon"/></Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    </div>)
}