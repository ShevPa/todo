import React from "react";

import NewTaskForm from "../NewTaskForm/new-task-form";
import TaskList from "../TaskList/task-list";
import Footer from "../Footer/footer"; 

export default class TodoApp extends React.Component {

  maxId = 100;

  state = {
    filterValue: 'All',
    todoData: [
        { 
          id:1,
          isCompleted: true,
          isEditing: false,
          description: 'Completed task',
          date: new Date()
        },
        { 
          id:2,
          isCompleted: false,
          isEditing: false,
          description: 'Editing task',
          date: new Date()
        },
        { 
          id:3,
          isCompleted: false,
          isEditing: false,
          description: 'Active task',
          date: new Date()
        }
    ]
  }

  createTodoItem(description) {
      return {
        description,
        isCompleted:false,
        isEditing:false,
        date: new Date(),
        id: this.maxId++,
      };
  };
  addItem = (text)=>{
    this.setState(({todoData})=>{
      return{
        todoData: [
          ...todoData, this.createTodoItem(text)
        ]
      }
    });
  };
  deleteItem = (id) => {
        this.setState(({ todoData }) => {
          return {
            todoData: todoData.filter((el) => el.id !== id),
          };
        });
  };
  deleteCompleted = () =>{
    this.setState(({todoData})=>{
      return{
        todoData: todoData.filter((el)=>!el.isCompleted),
      };
    })

  }
  toggleCompleted = (id) =>{
        this.setState(({todoData})=>{
          return {
            todoData: todoData.map((el)=>{
                if(el.id === id){
                    el.isCompleted = !el.isCompleted;
                }
                return el;
            })
          };
        });
  };
  toggleEditing = (id) =>{
      this.setState(({todoData})=>{
        return {
          todoData: todoData.map((el)=>{
              if(el.id === id){
                  el.isEditing = !el.isEditing;
              }
              return el;
          })
        };
      });
  };
  setFilter = (value) =>{
    this.setState({
      filterValue: value
    });
  };


  render(){  
    const todoCount = this.state.todoData.filter((el)=>!el.isCompleted).length;

    return (
        <section className="main">
          <NewTaskForm onItemAdded={this.addItem}/>
          <TaskList  todos = {this.state.todoData}
          onDeleted={this.deleteItem}
          onCompleted = {this.toggleCompleted}
          filterValue = {this.state.filterValue}/>
          <Footer toDo = {todoCount}
          setFilter ={this.setFilter} filterValue = {this.state.filterValue}
          clearCompleted = {this.deleteCompleted}/>
        </section>
    )   
  } 
}
