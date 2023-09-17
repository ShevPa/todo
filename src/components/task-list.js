import React from "react";
import Task from "./task";

const TaskList = ({todos}) => {
  const todoElements = todos.map((item)=>{
      
      return(
        <li 
        key={item.id}
        className = {(item.isCompleted ? "completed" : "") +
        " " +
        (item.isEditing ? "editing" : "")}>
          <Task {...item}/>
        </li>
      );
    })
    return (
      <ul className="todo-list">
        {todoElements}
      </ul>
    );
}
export default TaskList;
