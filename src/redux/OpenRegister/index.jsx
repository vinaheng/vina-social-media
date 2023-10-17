// targetSlice.js
import { createSlice } from '@reduxjs/toolkit';

const OpenRegisterSlice = createSlice({
    name: 'OpenRegister',

    initialState: {
        OpenRegisterData: false,
        OpenError: false,
    }, // Initial state for the OpenRegister value
    reducers: {
        setOpenRegister: (state, action) => {
            // This reducer sets the OpenRegister value
            state.OpenRegisterData = action.payload;
        },
        setOpenError: (state, action) => {
            state.OpenError = action.payload;
        },
    },
});

export const { setOpenRegister, setOpenError } = OpenRegisterSlice.actions;
export default OpenRegisterSlice.reducer;
