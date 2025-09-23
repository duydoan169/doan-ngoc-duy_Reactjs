import { configureStore } from "@reduxjs/toolkit";
import bai1 from "./slices/bai1Reducer"
import bai2 from "./slices/bai2Reducer";
import bai3 from "./slices/bai3Reducer";
import bai4 from "./slices/bai4Reducer";
import bai5 from "./slices/bai5Reducer";
import bai6 from "./slices/bai6Reducer";
import bai7 from "./slices/bai7Reducer";
import bai8 from "./slices/bai8Reducer";
export const store = configureStore({
    reducer: {
        bai1,
        bai2,
        bai3,
        bai4,
        bai5,
        bai6,
        bai7,
        bai8
    }
});