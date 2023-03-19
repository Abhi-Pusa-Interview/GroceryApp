import { renderHook,act } from "@testing-library/react";
import "@testing-library/jest-dom";
import useSearchQuery from "./useSearchQuery";

test('useSearchQuery hook returns proper value', () => {
    const { result } = renderHook(() => useSearchQuery())
    expect(result.current.searchQuery).toBe("")
    expect(result.current.updateSearchQuery).toBeInstanceOf(Function)
});

test('useSearchQuery hook function call should update the value', () => {
    const { result } = renderHook(() => useSearchQuery())
    act(() => {
        result.current.updateSearchQuery("search");
    })
    expect(result.current.searchQuery).toBe("search")
});