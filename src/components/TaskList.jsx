import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleTask } from "../redux/tasks/slice";
import {statusFilters} from "../redux/constants"

const TaskList = () => {
    const tasks = useSelector((state)=>state.tasks);
    const filterStatus = useSelector((state)=>state.filters.status)
    const dispatch = useDispatch()
  return (
    <ul>
      {
      tasks.filter((task)=>
      filterStatus === statusFilters.active
      ? !task.completed
      : filterStatus === statusFilters.completed
      ? task.completed
      : task
      )
      .map((task)=>(
        <li key={task.id}>
          {task.text} - {task.completed.toString()}
          <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={()=>{
            dispatch(toggleTask(task.id))
            }} />
        <button onClick={()=>{
          dispatch(deleteTask(task.id))
        }}>X</button>
        </li>
      ))}
    </ul>
  )
}

export default TaskList;
