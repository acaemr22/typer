import { configureStore } from "@reduxjs/toolkit";
import typingTestReducer from "./typingTest/typingTestSlice";

export const store = configureStore({
    reducer: {
        typingTest: typingTestReducer
    }
})

