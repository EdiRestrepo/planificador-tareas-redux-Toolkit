import { createSlice } from "@reduxjs/toolkit";

const notificationsIncialState = {
    type: null,
    message: '',
}

const notificationsSlice = createSlice({
    name: "notifications",
    initialState: notificationsIncialState,
    reducers: {
        setNotification(state, {payload}){
            state.type = payload.type;
            state.message = payload.message;
        },
        clearNotification(state){
            state.type = null;
            state.message = "";

        }
    }
})

export const {setNotification, clearNotification} = notificationsSlice.actions;
export const notificationReducer = notificationsSlice.reducer;