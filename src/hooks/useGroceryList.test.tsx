import { renderHook, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import useGroceryList from "./useGroceryList";
import { GroceryItemProps } from "../interfaces/Interfaces";


jest.mock("../services/service", () => {
    return ({
            "getGroceryListFromLocalStorage":() => [],
            "updateGroceryListInLocalStorage":jest.fn()
        })
})

test("returns proper values from useGroceryList hook", () => {
    const { result } = renderHook(() => useGroceryList());
    expect(result.current.groceryList).toEqual([])
    expect(result.current.addItemGroceryList).toBeInstanceOf(Function);
    expect(result.current.removeAllItems).toBeInstanceOf(Function);
    expect(result.current.removeItemGroceryList).toBeInstanceOf(Function);
    expect(result.current.sortGroceryList).toBeInstanceOf(Function);
    expect(result.current.updateGroceryItem).toBeInstanceOf(Function);
});

test("add new item to the list", () => {
    const { result } = renderHook(() => useGroceryList());
    act(() => {
        result.current.addItemGroceryList("rice");
    })
    act(() => {
        result.current.addItemGroceryList("gram");
    })
    expect(result.current.groceryList.length).toEqual(2);
});

test("update item to the list", () => {
    const { result } = renderHook(() => useGroceryList());
    const expectedValue:GroceryItemProps = {
        name: "rice",
        favourite: 0,
        unitOfMeasurement: "kg",
        unitPrice: 2.01,
        quantity: 10,
        imageUrl: "http://124",
        description : "rice description"
    };
    act(() => {
        result.current.addItemGroceryList("rice");
        result.current.updateGroceryItem(expectedValue,false);
    })
    expect(result.current.groceryList.length).toEqual(1);
    expect(JSON.stringify(result.current.groceryList)).toEqual(JSON.stringify([expectedValue]))
});

test("update item to the list", () => {
    const { result } = renderHook(() => useGroceryList());
    const expectedValue:GroceryItemProps = {
        name: "rice",
        favourite: 0,
        unitOfMeasurement: "kg",
        unitPrice: 2.01,
        quantity: 1,
        imageUrl: "",
        description : ""
    };
    act(() => {
        result.current.addItemGroceryList("rice");
    })
    act(() => {
        result.current.addItemGroceryList("gram");
    })
    act(() => {
        result.current.removeItemGroceryList("gram");
    })
    expect(result.current.groceryList.length).toEqual(1);
    expect(JSON.stringify(result.current.groceryList)).toEqual(JSON.stringify([expectedValue]))
});

test("remove all method is called", () => {
    const { result } = renderHook(() => useGroceryList());
    act(() => {
        result.current.addItemGroceryList("rice");
    })
    act(() => {
        result.current.addItemGroceryList("gram");
    })
    act(() => {
        result.current.removeAllItems();
    })
    expect(result.current.groceryList.length).toEqual(0);
    expect(JSON.stringify(result.current.groceryList)).toEqual(JSON.stringify([]))
});