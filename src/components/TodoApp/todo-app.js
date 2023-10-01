import React from 'react'

import NewTaskForm from '../NewTaskForm/new-task-form'
import TaskList from '../TaskList/task-list'
import Footer from '../Footer/footer'

export default class TodoApp extends React.Component {
  maxId = 100

  state = {
    filterValue: 'All',
    todoData: [],
  }

  addItem = (text, min, sec) => {
    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, this.createTodoItem(text, min, sec)],
      }
    })
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex((el) => el.id === id)
      const newData = [...todoData]
      if (newData[index].isTimerPlay === true) {
        clearInterval(newData[index.timerId])
      }
      return {
        todoData: newData.filter((el) => el.id !== id),
      }
    })
  }

  deleteCompleted = () => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.filter((el) => !el.isCompleted),
      }
    })
  }

  toggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.map((el) => {
          if (el.id === id) {
            el.isCompleted = !el.isCompleted
          }
          return el
        }),
      }
    })
  }

  toggleEditing = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.map((el) => {
          if (el.id === id) {
            el.isEditing = !el.isEditing
          }
          return el
        }),
      }
    })
  }

  editItem = (id, description) => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.map((el) => {
          if (el.id === id) {
            el.description = description
            el.isEditing = !el.isEditing
          }
          return el
        }),
      }
    })
  }

  playTimer = (id) => {
    const { isTimerPlay } = this.state.todoData.find((el) => el.id === id)
    if (!isTimerPlay) {
      const timerId = setInterval(() => {
        this.setState(({ todoData }) => {
          const newData = todoData.map((item) => {
            if (item.id === id) {
              let min = item.minutes
              let sec = item.seconds
              if (min === 0 && sec === 0) {
                this.pauseTimer(id)
              }
              sec--
              if (sec < 0 && min > 0) {
                sec = 59
                min--
              }
              if (sec < 0 && min === 0) {
                sec = 0
                this.pauseTimer(id)
              }
              return {
                ...item,
                minutes: min,
                seconds: sec,
              }
            }
            return item
          })
          return {
            todoData: newData,
          }
        })
      }, 1000)
      this.setState(({ todoData }) => {
        const index = todoData.findIndex((el) => el.id === id)
        const newData = [...todoData]
        newData[index].timerId = timerId
        newData[index].isTimerPlay = true
        return {
          todoData: newData,
        }
      })
    }
  }

  pauseTimer = (id) => {
    const { isTimerPlay, timerId } = this.state.todoData.find((el) => el.id === id)
    if (isTimerPlay) {
      this.setState(({ todoData }) => {
        const index = todoData.findIndex((el) => el.id === id)
        const newData = [...todoData]
        newData[index].timerId = null
        newData[index].isTimerPlay = false
        return {
          todoData: newData,
        }
      })
      clearInterval(timerId)
    }
  }

  setFilter = (value) => {
    this.setState({
      filterValue: value,
    })
  }

  createTodoItem(description, minutes, seconds) {
    return {
      description,
      isCompleted: false,
      isEditing: false,
      date: new Date(),
      id: this.maxId++,
      minutes,
      seconds,
      isTimerPlay: false,
      timerId: null,
    }
  }

  render() {
    const todoCount = this.state.todoData.filter((el) => !el.isCompleted).length

    return (
      <section className="main">
        <NewTaskForm onItemAdded={this.addItem} />
        <TaskList
          todos={this.state.todoData}
          onDeleted={this.deleteItem}
          onCompleted={this.toggleCompleted}
          onEditing={this.toggleEditing}
          onEditingDescription={this.editItem}
          filterValue={this.state.filterValue}
          playTimer={this.playTimer}
          pauseTimer={this.pauseTimer}
        />
        <Footer
          toDo={todoCount}
          setFilter={this.setFilter}
          filterValue={this.state.filterValue}
          clearCompleted={this.deleteCompleted}
        />
      </section>
    )
  }
}
