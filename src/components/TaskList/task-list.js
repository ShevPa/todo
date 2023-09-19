import React from "react";
import PropTypes from 'prop-types';
import Task from "../Task/task";


const TaskList = ({todos, onDeleted, onCompleted, onEditing, onEditingDescription, filterValue}) => {

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
          onCompleted = {()=>onCompleted(item.id)}
          onEditing = {()=>onEditing(item.id)}
          onEditingDescription={onEditingDescription}/>
        </li>
      );
    })
    return (
      <ul className="todo-list">
        {todoElements}
      </ul>
    );   
}
TaskList.defaultProps = {
  filterValue: 'All',     
}
TaskList.propTypes={
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleted: PropTypes.func.isRequired,
  onCompleted: PropTypes.func.isRequired, 
  onEditing: PropTypes.func.isRequired, 
  onEditingDescription: PropTypes.func.isRequired, 
  filterValue: PropTypes.string,
}
export default TaskList;
