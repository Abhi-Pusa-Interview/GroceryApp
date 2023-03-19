import {render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "./SearchBar";

const setSearchQuery = jest.fn();

let SearchBarDom:any;

beforeEach(() => {
    SearchBarDom = render(<SearchBar />);
})

test("render all elements in search bar component", () => {  
    expect(SearchBarDom.getByTestId("search-bar")).toBeInTheDocument();
});

test("should call setSearchBar methid onchange event of text field", () => {
    fireEvent.change(SearchBarDom.getByTestId("search-bar"), {
        target: { value: 'Joe' },
      });
    expect(setSearchQuery).toBeCalledTimes(1);
    expect(setSearchQuery).toHaveBeenCalledWith('Joe');
});