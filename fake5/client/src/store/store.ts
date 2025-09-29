import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/productSlices"
export const store = configureStore({
    reducer: {
        products: products
    }
})