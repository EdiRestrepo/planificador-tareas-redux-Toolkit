
import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters/slice";
import { taskReducer } from "./tasks/slice";
import { notificationReducer } from "./notifications/slice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filters: filtersReducer,
    notifications: notificationReducer
  }
})