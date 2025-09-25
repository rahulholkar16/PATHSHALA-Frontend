import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "./slices/login.Slice";

export const stor = configureStore({
    reducer: LoginReducer
});
