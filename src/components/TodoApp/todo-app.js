import React, { useState } from 'react'

import NewTaskForm from '../NewTaskForm/new-task-form'
import TaskList from '../TaskList/task-list'
import Footer from '../Footer/footer'

function TodoApp() {
  const [maxId, setMaxId] = useState(100)
  const [filterValue, setFilterValue] = useState('All')
  const [todoData, setTodoData] = useState([])

  const createTodoItem = (description, minutes, seconds) => {
    setMaxId(maxId + 1)
    return {
      description,
      isCompleted: false,
      isEditing: false,
      date: new Date(),
      id: maxId,
      minutes,
      seconds,
      isTimerPlay: false,
      timerId: null,
    }
  }

  const addItem = (text, min, sec) => {
    setTodoData((data) => {
      return [...data, createTodoItem(text, min, sec)]
    })
  }

  const deleteCompleted = () => {
    setTodoData((data) => {
      return data.filter((el) => !el.isCompleted)
    })
  }

  const toggleCompleted = (id) => {
    setTodoData((data) => {
      return data.map((el) => {
        if (el.id === id) {
          el.isCompleted = !el.isCompleted
        }
        return el
      })
    })
  }

  const toggleEditing = (id) => {
    setTodoData((data) => {
      return data.map((el) => {
        if (el.id === id) {
          el.isEditing = !el.isEditing
        }
        return el
      })
    })
  }

  const editItem = (id, description) => {
    setTodoData((data) => {
      return data.map((el) => {
        if (el.id === id) {
          el.description = description
          el.isEditing = !el.isEditing
        }
        return el
      })
    })
  }

  const setFilter = (value) => {
    setFilterValue(value)
  }

  const pauseTimer = (id) => {
    const { isTimerPlay, timerId } = todoData.find((el) => el.id === id)
    if (isTimerPlay) {
      setTodoData((data) => {
        const index = data.findIndex((el) => el.id === id)
        const newData = [...data]
        newData[index].timerId = null
        newData[index].isTimerPlay = false
        return newData
      })
      clearInterval(timerId)
    }
  }

  const deleteItem = (id) => {
    pauseTimer(id)
    setTodoData((data) => {
      return data.filter((el) => el.id !== id)
    })
  }

  const playTimer = (id) => {
    const { isTimerPlay } = todoData.find((el) => el.id === id)
    if (!isTimerPlay) {
      const timerId = setInterval(() => {
        setTodoData((data) => {
          const newData = data.map((item) => {
            if (item.id === id) {
              let min = item.minutes
              let sec = item.seconds
              if (min === 0 && sec === 0) {
                pauseTimer(id)
              }
              sec--
              if (sec < 0 && min > 0) {
                sec = 59
                min--
              }
              if (sec < 0 && min === 0) {
                sec = 0
                pauseTimer(id)
              }
              return {
                ...item,
                minutes: min,
                seconds: sec,
              }
            }
            return item
          })
          return newData
        })
      }, 1000)
      setTodoData((data) => {
        const index = data.findIndex((el) => el.id === id)
        const newData = [...data]
        newData[index].timerId = timerId
        newData[index].isTimerPlay = true
        return newData
      })
    }
  }

  const todoCount = todoData.filter((el) => !el.isCompleted).length

  return (
    <section className="main">
      <NewTaskForm onItemAdded={addItem} />
      <TaskList
        todos={todoData}
        onDeleted={deleteItem}
        onCompleted={toggleCompleted}
        onEditing={toggleEditing}
        onEditingDescription={editItem}
        filterValue={filterValue}
        playTimer={playTimer}
        pauseTimer={pauseTimer}
      />
      <Footer toDo={todoCount} setFilter={setFilter} filterValue={filterValue} clearCompleted={deleteCompleted} />
    </section>
  )
}
export default TodoApp
