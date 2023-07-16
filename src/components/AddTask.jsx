import { useDispatch } from "react-redux";
import { createTask } from "../redux/tasks/slice";

const AddTask = () => {

    const dispatch = useDispatch();
    
    const handleCreateTastk = (e)=>{
        e.preventDefault();
        const {text} = e.target.elements;
        console.log(text);
        if(text.value){
            dispatch(createTask(text.value))
        }
    }

  return (
    <form onSubmit={handleCreateTastk}>
        <h3>Add Task</h3>
        <input type="text" placeholder="task name" name="text" />
        <button type="submit">Add Task</button>
    </form>
  )
}

export default AddTask;
