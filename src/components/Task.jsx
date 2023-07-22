import React from "react";
import { getDataAndTime } from "../utils/formatting/getDataAndTime";

export const Task = ({ task, toggleStatus, deleteTask }) => {
  return (
    <li
      style={{
        listStyle: "none",
        border: "1px solid red",
        margin: "10px",
        padding: "8px",
      }}
    >
      <div>
        {task.text}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => {
            toggleStatus(task.id);
          }}
        />
        <button
          onClick={() => {
            deleteTask(task.id);
          }}
        >
          X
        </button>
          </div>
          <span>Created at: {getDataAndTime(task.created_at)}</span>
    </li>
  );
};

export default Task;
