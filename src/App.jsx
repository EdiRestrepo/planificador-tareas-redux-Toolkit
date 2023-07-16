import { useSelector } from "react-redux";
import AddTask from "./components/AddTask";
import Notification from "./components/Notification";
import StatusFilter from "./components/StatusFilter";
import TaskList from "./components/TaskList";

function App() {
  const {type, message} = useSelector((state)=> state.notifications)
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column'

    }}>
      {type && <Notification type={type} message={message} />}
      
      <StatusFilter/>
      <AddTask/>
      <TaskList/>
    </div>
  );
}

export default App;
