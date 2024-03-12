import { createSlice } from '@reduxjs/toolkit'
import { currentUser, logIn, register } from './operation'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            name: null,
            email: null,
            password: null
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true
            })
            .addCase(currentUser.pending, state => {
                state.isRefreshing = true
            })
            .addCase(currentUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(currentUser.rejected, state => {
                state.isRefreshing = false;
            })
    }
})

export const { pending, success, error } = authSlice.actions;

export default authSlice.reducer