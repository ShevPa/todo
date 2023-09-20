import React from 'react'
import { createRoot } from 'react-dom/client'

import TodoApp from './components/TodoApp/todo-app'
import './index.css'

const root = createRoot(document.querySelector('.todoapp'))

root.render(<TodoApp />)
