import {render} from "@testing-library/react";
import "@testing-library/jest-dom";
import Grocery from "./Grocery";

let mockGroceryList = [{
    name:"apple",
    unitOfMeasurement: "kg",
    favourite : 0,
    quantity: 1,
    unitPrice: 1.02,
    imageUrl: "http://imageurl",
    description: "apple description"
}]
const mockAddItemGroceryList = jest.fn();
const mockUpdateGroceryItem = jest.fn();
const mockRemoveItemGroceryList = jest.fn();
const mockRemoveAllItems = jest.fn();
const mocksortGroceryList = jest.fn();

jest.mock("../../hooks/useGroceryList", () => {
    return () => ({
        groceryList: mockGroceryList,
        addItemGroceryList: mockAddItemGroceryList,
        updateGroceryItem: mockUpdateGroceryItem,
        removeItemGroceryList: mockRemoveItemGroceryList,
        removeAllItems: mockRemoveAllItems,
        sortGroceryList : mocksortGroceryList
    });
});

jest.mock("./../../component/SortGroceryList/SortGroceryList", () => () => "SortGroceryList");
jest.mock("../../component/GroceryControl/GroceryControl", () => () => "GroceryControl");
jest.mock("../../component/GroceryItem/GroceryItem", () => () => "GroceryItem");
jest.mock("../../component/AddGroceryItem/AddGroceryItem", () => () => "AddGroceryItem");
jest.mock("../../component/List/List", () => () => "List");

test("render all child elememt of grocery component", () => {
    const groceryDom = render(<Grocery />);
    expect(groceryDom.getByText(/SortGroceryList/)).toBeInTheDocument();
    expect(groceryDom.getByText(/GroceryControl/)).toBeInTheDocument();
    expect(groceryDom.getByText(/List/)).toBeInTheDocument();
});



