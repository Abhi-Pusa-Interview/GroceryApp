import {render,fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import SortGroceryList from "./SortGroceryList";
import { btnList } from "./SortGroceryList";
import { toCamelCase } from "../../utils/utils";

const sortListItems = jest.fn();

let sortGroceryListDom:any;

beforeEach(() => {
    sortGroceryListDom = render(<SortGroceryList sortListItems={sortListItems} />)
})

test("render all elements in searchGroceryList component", () => {
    expect(sortGroceryListDom.getByTestId("box-wrapper")).toBeInTheDocument();
    btnList.map((b:any) => {
        expect(sortGroceryListDom.getByTestId(b)).toBeInTheDocument();
    });
});

test("sortListItems called when sort button is clicked", () => {
    fireEvent(
        sortGroceryListDom.getByTestId(btnList[0]),
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        }),
    )
    expect(sortListItems).toBeCalledTimes(1);
    expect(sortListItems).toHaveBeenCalledWith(btnList[0]);
});