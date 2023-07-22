import { useDispatch, useSelector } from "react-redux";
// import { createTask } from "../redux/tasks/slice";
import { setNotification } from "../redux/notifications/slice";
import { addTask } from "../redux/operations";
import { selectAllTasks } from "../redux/selectors";

const AddTask = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectAllTasks);

  const handleCreateTastk = (e) => {
    e.preventDefault();
    const { text } = e.target.elements;
    const matchingTasks = tasks.filter((task) => task.text === text.value);
    console.log(text);
    if (text.value && matchingTasks.length === 0) {
      dispatch(addTask(text.value));
      dispatch(
        setNotification({
          type: "success",
          message: "The task was succesfully created",
        })
      );
    } else if (matchingTasks.length > 0) {
      dispatch(
        setNotification({
          type: "warning",
          message: "There´s already a task with the same text",
        })
      );
    }
  };

  return (
    <form onSubmit={handleCreateTastk}>
      <h3>Add Task</h3>
      <input type="text" placeholder="task name" name="text" />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
