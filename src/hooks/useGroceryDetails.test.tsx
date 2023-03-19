import { renderHook } from "@testing-library/react";
import "@testing-library/jest-dom";
import useGroceryDetails from "./useGroceryDetails";
import { GroceryItemProps } from "../interfaces/Interfaces";

const respone = {
    imageUrl: "http://124",
    description : "rice description"
}

const callback = jest.fn();

const mockAsyncCall = new Promise((resolve,reject) => {
    resolve(callback(respone));
});

jest.mock("../services/service", () => {
    return ({
            "getGroceryDetails":() => mockAsyncCall,
        })
});


test("returns proper value from useGroceryDetails hook", async () => {
    const item : GroceryItemProps = {
        name: "rice",
        favourite: 0,
        unitOfMeasurement: "kg",
        unitPrice: 2.01,
        quantity: 10,
        imageUrl: "",
        description : ""
    }
    const {result} = await renderHook(() => useGroceryDetails(item,callback));
    expect(callback).toBeCalled();
});