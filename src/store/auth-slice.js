import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        role: null,
        message: '',
        sending: false
    },
    reducers: {
        login(state, action) {
            state.token = action.payload.token;
            state.role = action.payload.role;
            state.message = action.payload.message;
            state.sending = action.payload.sending;
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice;