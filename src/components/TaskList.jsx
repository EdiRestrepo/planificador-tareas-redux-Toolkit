import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTask } from "../redux/tasks/slice";
import { statusFilters } from "../redux/constants";
import { useEffect } from "react";
import { fetchTasks } from "../redux/operations";
import { getAllTasks } from "../redux/tasks/selectors";
import { getFiltersStatus } from "../redux/filters/selectors";

const TaskList = () => {
  const tasks = useSelector(getAllTasks);
  const filterStatus = useSelector(getFiltersStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch]);

  return (
    <ul>
      {tasks
        .filter((task) =>
          filterStatus === statusFilters.active
            ? !task.completed
            : filterStatus === statusFilters.completed
            ? task.completed
            : task
        )
        .map((task) => (
          <li key={task.id}>
            {task.text} - {task.completed.toString()}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => {
                dispatch(toggleTask(task.id));
              }}
            />
            <button
              onClick={() => {
                dispatch(deleteTask(task.id));
              }}
            >
              X
            </button>
          </li>
        ))}
    </ul>
  );
};

export default TaskList;
