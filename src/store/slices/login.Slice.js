import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false,
}

export const LoginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        isLogin: (state, action) => {
            state.isLogin = action.payload         
        },
        isLogout: (state, action) => {
            state.isLogin = action.payload
        }
    }
});

export const { isLogin, isLogout } = LoginSlice.actions;
export default LoginSlice.reducer;