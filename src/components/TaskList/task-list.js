import React from "react";
import Task from "../Task/task";

const TaskList = ({todos, onDeleted, onCompleted, filterValue}) => {

  const todoFiltredElements = todos.filter((item)=>{
    if(filterValue === 'All') return true;
    if(filterValue === 'Active') return !item.isCompleted;
    if(filterValue === 'Completed') return item.isCompleted;
    return false;
  })
  const todoElements = todoFiltredElements.map((item)=>{
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
