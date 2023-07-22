import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTask } from "../redux/tasks/slice";
import { statusFilters } from "../redux/constants";
import { useEffect } from "react";
import { fetchTasks } from "../redux/operations";
import { selectAllTasks, selectFiltersStatus, selectTasksCount, selectVisibleTasks, selectVisibleTasksCount } from "../redux/selectors";
import Task from "./Task";

const TaskList = () => {
  // const tasks = useSelector(selectAllTasks);
  // const filterStatus = useSelector(selectFiltersStatus);

  const visibleTasks = useSelector(selectVisibleTasks);
  const tasksCount = useSelector(selectTasksCount);
  const visbleTasksCount = useSelector(selectVisibleTasksCount);
  const dispatch = useDispatch();

  // const getVisibleTasks = (tasks, filterStatus) => {
  //   return tasks.filter((task) =>
  //     filterStatus === statusFilters.active
  //       ? !task.completed
  //       : filterStatus === statusFilters.completed
  //       ? task.completed
  //       : task
  //   );
  // }

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <h4 style={{ padding: 0, margin: "10px 0 0" }}>
        Task count: {tasksCount}
      </h4>
      {tasksCount !== visbleTasksCount && (
        <h4 style={{ padding: 0, margin: "10px 0 0" }}>
          Visible Task count: {visbleTasksCount}
        </h4>
      )}

      <ul>
        {visibleTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleStatus={() => dispatch(toggleTask(task.id))}
            deleteTask={() => dispatch(deleteTask(task.id))}
          />
          // <li key={task.id}>
          //   {task.text} - {task.completed.toString()}
          //   <input
          //     type="checkbox"
          //     checked={task.completed}
          //     onChange={() => {
          //       dispatch(toggleTask(task.id));
          //     }}
          //   />
          //   <button
          //     onClick={() => {
          //       dispatch(deleteTask(task.id));
          //     }}
          //   >
          //     X
          //   </button>
          // </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
