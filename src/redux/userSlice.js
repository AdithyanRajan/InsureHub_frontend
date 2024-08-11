import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userData:{
        username: "-",
        email: false,
    }

};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.userData = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;