import React from "react";

import NewTaskForm from "../NewTaskForm/new-task-form";
import TaskList from "../TaskList/task-list";
import Footer from "../Footer/footer"; 

export default class TodoApp extends React.Component {

    state = {
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
              isEditing: true,
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
    deleteItem = (id) => {
        this.setState(({ todoData }) => {
          return {
            todoData: todoData.filter((el) => el.id !== id),
          };
        });
    };
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
    }
    render(){    
          return (
            <section className="main">
              <NewTaskForm />
              <TaskList  todos = {this.state.todoData}
              onDeleted={this.deleteItem}
              onCompleted = {this.toggleCompleted}/>
              <Footer />
            </section>
          )
    } 
  }
