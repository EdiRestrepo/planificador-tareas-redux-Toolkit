import { createSlice, nanoid} from "@reduxjs/toolkit";

const taskInitialState = [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ];

const tasksSlice = createSlice({
    name: 'tasks',
    initialState:  taskInitialState,
    reducers:{
        createTask(state, action){
            if(state.indexOf(task => task.text ===action.payload)){
                
            }
            state.push({id: nanoid(), text: action.payload, completed: false})
          },
        toggleTask(state, {payload}){
            for(let task of state){
              if(task.id === payload){
                task.completed = !task.completed
              }
            }
          },
        deleteTask(state, {payload}){
            const index = state.findIndex(task => task.id === payload)
            state.splice(index, 1);
          },
    }
});

export const {createTask,toggleTask,deleteTask} = tasksSlice.actions;
export const taskReducer = tasksSlice.reducer;