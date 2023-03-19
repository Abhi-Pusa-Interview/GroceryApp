import {render,fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom';
import GroceryControl from "./GroceryControl";


const handleAddItem = jest.fn();

const handleDeleteItem = jest.fn();

let groceryControlDom : any;

beforeEach(() => {
    groceryControlDom = render(<GroceryControl handleAddItem={handleAddItem} handleDeleteItem={handleDeleteItem} />);
})

test("render grocery control icon", () => {
    expect(groceryControlDom.getByTestId("wrapper-box")).toBeInTheDocument();
    expect(groceryControlDom.getByTestId("add-item-btn")).toBeInTheDocument();
    expect(groceryControlDom.getByTestId("remove-all-icon")).toBeInTheDocument();
    expect(groceryControlDom.getByTestId("remove-all-btn")).toBeInTheDocument();
    expect(groceryControlDom.getByTestId("remove-all-icon")).toBeInTheDocument();
});

test("add new item button is clicked", () => {
    fireEvent(
        groceryControlDom.getByTestId('add-item-btn'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
    )

    expect(handleAddItem).toBeCalledTimes(1);
});

test("remove all button is clicked once", () => {
    fireEvent(
        groceryControlDom.getByTestId('remove-all-btn'),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
    )

    expect(handleDeleteItem).toBeCalledTimes(1);
});