import React from "react";
import TasksFilter from "../TasksFilter/tasks-filter";

export default class Footer extends React.Component{

  render(){
    const {toDo, filterValue, setFilter, clearCompleted} = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{toDo} items left</span>
        <TasksFilter filterValue={filterValue} setFilter={setFilter}/>
        <button className="clear-completed"
        onClick={clearCompleted}>Clear completed</button>
      </footer>
    );
  }
}
