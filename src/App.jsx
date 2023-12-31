import { useSelector } from "react-redux";
import AddTask from "./components/AddTask";
import Notification from "./components/Notification";
import StatusFilter from "./components/StatusFilter";
import TaskList from "./components/TaskList";
import { selectNotifications } from "./redux/selectors";

function App() {
  const { type, message } = useSelector(selectNotifications);
  const { isLoading, error } = useSelector((state) => state.tasks);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      {type && <Notification type={type} message={message} />}

      <StatusFilter />
      <AddTask />
      {isLoading && !error && <p>Feching data...</p>}
      <TaskList />
    </div>
  );
}

export default App;
