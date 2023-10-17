// targetSlice.js
import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
    name: 'User',

    initialState: {
        UserData: [],
    }, // Initial state for the User value
    reducers: {
        setUser: (state, action) => {
            // This reducer sets the User value
            state.UserData = action.payload;
        },
    },
});

export const { setUser } = UserSlice.actions;
export default UserSlice.reducer;
