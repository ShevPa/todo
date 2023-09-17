import React from "react";
import { createRoot } from 'react-dom/client';

import NewTaskForm from "./components/new-task-form";
import TaskList from "./components/task-list";
import Footer from "./components/footer";

import './index.css';

const root = createRoot(document.querySelector('.todoapp'));


const App = () => {

  const todoData = [
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
  ];

  return (
    <section className="main">
      <NewTaskForm />
      <TaskList  todos = {todoData}/>
      <Footer />
    </section>
  )
}

root.render(<App />);
