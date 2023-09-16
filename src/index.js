import React from "react";
import { createRoot } from 'react-dom/client';

import NewTaskForm from "./components/new-task-form";
import TaskList from "./components/task-list";
import Footer from "./components/footer";

import './index.css';

const root = createRoot(document.querySelector('.todoapp'));


const App = () => {

  return (
    <div>
      <NewTaskForm />
      <TaskList />
      <Footer />
    </div>
  )
}

root.render(<App />);
