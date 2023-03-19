import { renderHook } from "@testing-library/react";
import "@testing-library/jest-dom";
import useFoodItemListConverter from "./useFoodItemListConverter";

const matchedList = ["apple","rice","oranges","pulses","gram","vegetable oil","donut"];

test('return proper values from useFoodItemListConverter hook', () => {
    const { result } = renderHook(() => useFoodItemListConverter());
    expect(JSON.stringify(result.current.data)).toBe(JSON.stringify(matchedList));
});