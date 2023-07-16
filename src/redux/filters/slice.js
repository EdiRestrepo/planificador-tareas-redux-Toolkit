import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "../constants";

const filtersInitialState = {
    status: statusFilters.all,
}


const filterSlice = createSlice({
    name: "filters",
    initialState:filtersInitialState,
    reducers:{
        updateFilter(state, {payload}){
            state.status = payload;
        }
    }
})

export const {updateFilter} = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;