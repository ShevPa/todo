import React from "react";
import Task from "./task";

const TaskList = () =>{
    return (
        <ul className="todo-list">
            <Task state ="completed" description ='Completed task'/>
            <Task state ="editing" description ='Editing task'/>
            <Task description='Active task'/>
        </ul>
    );
};

export default TaskList;