import "@testing-library/jest-dom";
import {filterData,toCamelCase} from "./utils";

test("convert string to camelcase", () => {
    expect(toCamelCase("storyful")).toEqual("Storyful");
});

test("filter data based on query", () => {
    const list:Array<string> = ["dublin","sligo","cork","wexford"];
    const expectedlist:Array<string> = ["sligo","cork","wexford"];
    const queryString:string = "o";
    expect(filterData(queryString,list)).toEqual(expectedlist);
});