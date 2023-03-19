import {render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "./SearchBar";

const mockSetSearchQuery = jest.fn();

let SearchBarDom:any;

beforeEach(() => {
    SearchBarDom = render(<SearchBar setSearchQuery={mockSetSearchQuery} />);
})

test("render all elements in search bar component", () => {  
    expect(SearchBarDom.getByTestId("search-bar")).toBeInTheDocument();
});

test("should call setSearchBar method onchange event of text field", () => {
    const field  = SearchBarDom.getByRole("textbox");
    fireEvent.input(field, { target: { value: 'Joe' }});
    expect(mockSetSearchQuery).toBeCalledTimes(1);
    expect(mockSetSearchQuery).toHaveBeenCalledWith('Joe');
});