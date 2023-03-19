import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import AddGroceryItem from "./AddGroceryItem";

const mockFoodList = ["apple","mango"];

let mockHandleAddItem = jest.fn();

let mockUpdateSearchQuery = jest.fn();

jest.mock("../../hooks/useFoodItemListConverter", () => {
    return () => ({data:mockFoodList});
});

jest.mock("../../hooks/useSearchQuery", () => {
    return () => ({searchQuery:"a",updateSearchQuery:mockUpdateSearchQuery});
});

jest.mock('../SearchBar/SearchBar', () => () => "SeachBar");

let addGroceryItemDom : any;

test('addGroceryItem is rendered with search list items', async () => {
    addGroceryItemDom = render(<AddGroceryItem handleAddItem={mockHandleAddItem} />);
    // Assert
    expect(addGroceryItemDom.getByTestId("add-grocery-paper")).toBeTruthy();
    expect(addGroceryItemDom.getByText("SeachBar")).toBeTruthy();
    expect(addGroceryItemDom.getAllByTestId("matched-grocery-list").length).toEqual(2);
});