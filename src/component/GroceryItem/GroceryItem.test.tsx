import {render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import { GroceryItemProps } from "../../interfaces/Interfaces";
import GroceryItem from "./GroceryItem";
import { toCamelCase } from "../../utils/utils";

let data:GroceryItemProps = {
    name:"apple",
    unitOfMeasurement: "kg",
    favourite : 0,
    quantity: 1,
    unitPrice: 1.02,
    imageUrl: "http://imageurl",
    description: "apple description"
}

const mockUpdateGroceryItems = jest.fn();
const mockRemoveGroceryItem = jest.fn();

jest.mock('../../hooks/useGroceryDetails', () => {
    return () => undefined;
})

let groceryItemDom:any; 

beforeEach(() => {
    groceryItemDom = render(<GroceryItem data={data} updateGroceryItems={mockUpdateGroceryItems} removeGroceryItem={mockRemoveGroceryItem}/>);
})

test("render all elements of component with given data", () => {
    expect(groceryItemDom.getByTestId("box-wrapper")).toBeInTheDocument();
    expect(groceryItemDom.getByTestId("grocery-item-paper")).toBeInTheDocument();
    expect(groceryItemDom.getByTestId("favourite-btn")).toBeInTheDocument();

    expect(groceryItemDom.getByTestId("favourite-border-icon")).toBeInTheDocument();
    expect(groceryItemDom.queryAllByTestId("favourite-icon")).toHaveLength(0);

    expect(groceryItemDom.getByTestId("grocery-img")).toBeInTheDocument();

    expect(groceryItemDom.getByText(toCamelCase(data.name))).toBeInTheDocument();
    expect(groceryItemDom.getByText(data.description)).toBeInTheDocument();
    expect(groceryItemDom.getByText(data.unitPrice)).toBeInTheDocument();
    expect(groceryItemDom.getByText(data.quantity)).toBeInTheDocument();
    expect(groceryItemDom.getByText(data.unitOfMeasurement)).toBeInTheDocument();

    expect(groceryItemDom.getByTestId("add-quantity-btn")).toBeInTheDocument();
    expect(groceryItemDom.getByTestId("add-item-icon")).toBeInTheDocument();

    expect(groceryItemDom.getByTestId("remove-quantity-btn")).toBeInTheDocument();
    expect(groceryItemDom.getByTestId("remove-item-icon")).toBeInTheDocument();
    
    expect(groceryItemDom.getByTestId("delete-item-btn")).toBeInTheDocument();
    expect(groceryItemDom.getByTestId("delete-item-icon")).toBeInTheDocument();
});

test("update method is called when favourate button is clicked", () => {
    fireEvent(
        groceryItemDom.getByTestId('favourite-border-icon'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
    )
    expect(mockUpdateGroceryItems).toBeCalledTimes(1);
    expect(mockUpdateGroceryItems).toHaveBeenCalledWith(data,true);
});

test("update method is called when add quantity button is clicked", () => {
    fireEvent(
        groceryItemDom.getByTestId('add-quantity-btn'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
    )
    expect(mockUpdateGroceryItems).toBeCalledTimes(1);
    expect(mockUpdateGroceryItems).toHaveBeenCalledWith(data,false);
});


test("update method is called when reduce quantity button is clicked", () => {
    fireEvent(
        groceryItemDom.getByTestId('remove-quantity-btn'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
    )
    
    expect(mockUpdateGroceryItems).toBeCalledTimes(1); 
    expect(mockUpdateGroceryItems).toHaveBeenCalledWith(data,false);
});

test("remove all method is called when remove all button is clicked", () => {
    fireEvent(
        groceryItemDom.getByTestId('delete-item-btn'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
    )

    expect(mockRemoveGroceryItem).toBeCalledTimes(1);
});