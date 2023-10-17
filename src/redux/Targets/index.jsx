// targetSlice.js
import { createSlice } from '@reduxjs/toolkit';

const targetSlice = createSlice({
    name: 'target',
    initialState: {
        targetData: null,
    }, // Initial state for the target value
    reducers: {
        setTarget: (state, action) => {
            // This reducer sets the target value
            state.targetData = action.payload;
        },
    },
});

export const { setTarget } = targetSlice.actions;
export default targetSlice.reducer;
