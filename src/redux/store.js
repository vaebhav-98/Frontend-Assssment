import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slices/movies";

export const store = configureStore({
    reducer : {
        movies : moviesReducer
    }
})