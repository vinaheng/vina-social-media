// targetSlice.js
import { createSlice } from '@reduxjs/toolkit';

const AuthUserSlice = createSlice({
    name: 'AuthUser',

    initialState: {
        AuthUserData: {},
        token: '',
    }, // Initial state for the AuthUser value
    reducers: {
        setAuthUser: (state, action) => {
            // This reducer sets the AuthUser value
            state.AuthUserData = action.payload;
        },
        setToken: (state, action) => {
            // This reducer sets the AuthUser value
            state.token = action.payload;
        },
    },
});

export const { setAuthUser, setToken } = AuthUserSlice.actions;
export default AuthUserSlice.reducer;
