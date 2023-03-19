export interface GroceryItemProps {
    name: string,
    unitOfMeasurement: "kg" | "ltr" | "pieces",
    favourite : 0 | 1,
    quantity: number,
    unitPrice: number,
    imageUrl: string,
    description: string
}

export interface FoodItem {
    name : string,
    unitPrice: number,
    unitOfMeasurement: "kg" | "ltr" | "pieces"
}