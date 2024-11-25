import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";


export const appStore = configureStore({
    reducer: {
        books: booksReducer,
      },  
});