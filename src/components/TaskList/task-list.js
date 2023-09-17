import React from "react";
import Task from "../Task/task";

const TaskList = ({todos, onDeleted, onCompleted}) => {
  const todoElements = todos.map((item)=>{
      
      return(
        <li 
        key={item.id}
        className = {(item.isCompleted ? "completed" : "") +
        " " +
        (item.isEditing ? "editing" : "")}>
          <Task task = {item} 
          onDeleted={()=>onDeleted(item.id)}
          onCompleted = {()=>onCompleted(item.id)}/>
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
