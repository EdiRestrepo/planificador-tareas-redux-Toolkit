import { createSlice, nanoid} from "@reduxjs/toolkit";
import { fetchTasks, addTask } from "../operations";

const taskInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: taskInitialState,
  reducers: {
    createTask(state, action) {
      state.items.push({
        id: nanoid(),
        text: action.payload,
        completed: false,
      });
    },
    toggleTask(state, { payload }) {
      for (let task of state.items) {
        if (task.id === payload) {
          task.completed = !task.completed;
        }
      }
    },
    deleteTask(state, { payload }) {
      const index = state.items.findIndex((task) => task.id === payload);
      state.items.splice(index, 1);
    },
  },
  extraReducers: {
    [fetchTasks.pending](state) {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchTasks.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [addTask.pending](state) {
      state.isLoading = true;
    },
    [addTask.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    [addTask.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const {createTask,toggleTask,deleteTask} = tasksSlice.actions;
export const taskReducer = tasksSlice.reducer;


// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const taskInitialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

// const tasksSlice = createSlice({
//   name: "tasks",
//   initialState: taskInitialState,
//   reducers: {
//     createTask(state, action) {
//       state.items.push({
//         id: nanoid(),
//         text: action.payload,
//         completed: false,
//       });
//     },
//     toggleTask(state, { payload }) {
//       for (let task of state.items) {
//         if (task.id === payload) {
//           task.completed = !task.completed;
//         }
//       }
//     },
//     deleteTask(state, { payload }) {
//       const index = state.items.findIndex((task) => task.id === payload);
//       state.items.splice(index, 1);
//     },
//     fetchingInProgress(state) {
//       state.isLoading = true;
//     },
//     fetchingSuccess(state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = payload;
//     },
//     fechingError(state, { payload }) {
//       state.isLoading = false;
//       state.error = payload;
//     },
//   },
// });

// export const {
//   createTask,
//   toggleTask,
//   deleteTask,
//   fetchingInProgress,
//   fetchingSuccess,
//   fechingError,
// } = tasksSlice.actions;
// export const taskReducer = tasksSlice.reducer;