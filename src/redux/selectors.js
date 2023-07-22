import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

export const selectAllTasks = (state) => state.tasks.items;
export const selectNotifications = (state) => state.notifications;
export const selectFiltersStatus = (state) => state.filters.status;

export const selectVisibleTasks = (state) => {
  const tasks = selectAllTasks(state);
  const filterStatus = selectFiltersStatus(state);

  return tasks.filter((task) =>
    filterStatus === statusFilters.active
      ? !task.completed
      : filterStatus === statusFilters.completed
      ? task.completed
      : task
  );
};

//Optimización con createSelector
export const selectTasksCount = createSelector([selectAllTasks], (tasks) => {
  return tasks.length;
});

export const selectVisibleTasksCount = createSelector(
  [selectVisibleTasks],
  (tasks) => {
    return tasks.length;
  }
);
// export const selectVisibleTasksCount = (state) => {
//   const tasks = selectVisibleTasks(state);

//   return tasks.length;
// };

// export const selectTasksCount = (state) => {
//   const tasks = selectAllTasks(state);

//   return tasks.length;
// };
