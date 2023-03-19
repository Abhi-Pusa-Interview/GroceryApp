import "@testing-library/jest-dom";
import axios from "axios";
import { GroceryItemProps } from "../interfaces/Interfaces";
import {getGroceryDetails, getGroceryListFromLocalStorage, updateGroceryListInLocalStorage} from "./service";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedData = {"name":"rice"};

test("text service call",async () => {
    mockedAxios.request.mockResolvedValue(mockedData);
    const response = await getGroceryDetails("rice");
    expect(JSON.stringify(response)).toEqual(JSON.stringify(mockedData));
});

test("text localstorage service",async () => {
    const expectedValue:Array<GroceryItemProps> = [{
        name: "rice",
        favourite: 0,
        unitOfMeasurement: "kg",
        unitPrice: 2.01,
        quantity: 10,
        imageUrl: "http://124",
        description : "rice description"
    }];
    updateGroceryListInLocalStorage(expectedValue);
    expect(JSON.stringify(getGroceryListFromLocalStorage())).toEqual(JSON.stringify(expectedValue));
});