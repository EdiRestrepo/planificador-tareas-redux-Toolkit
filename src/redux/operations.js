import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:3000";

export const fetchTasks = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const data = await fetch(`${BASE_URL}/tasks`);
      const response = await data.json();
      return response;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (text, thunkAPI) => {
    try {
      const data = await fetch(`${BASE_URL}/tasks`, {
        method: "POST",
        body: JSON.stringify({
          text,
          completed: false,
          created_at: new Date().toISOString(),
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      const response = await data.json();
      return response;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

//tasks/fetchAll/pending
//tasks/fetchAll/fullfilled
//tasks/fetchAll/rejected

// import {
//   fechingError,
//   fetchingInProgress,
//   fetchingSuccess,
// } from "./tasks/slice";

// const BASE_URL = "http://localhost:3000";

// export const fetchTasks = () => async (dispatch) => {
//   try {
//     dispatch(fetchingInProgress());
//     const data = await fetch(`${BASE_URL}/tasks`);
//     const response = await data.json();
//     dispatch(fetchingSuccess(response));
//   } catch (e) {
//     dispatch(fechingError(e.message));
//   }
// };
