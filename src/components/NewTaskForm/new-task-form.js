import React, { useState } from 'react'
import PropTypes from 'prop-types'

function NewTaskForm({ onItemAdded }) {
  const [label, setLabel] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')

  const onLabelChange = (event) => {
    setLabel(event.target.value)
  }

  const onMinutChange = (event) => {
    setMinutes(event.target.value)
  }

  const onSecondChange = (event) => {
    setSeconds(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    onItemAdded(label, minutes, seconds)
    setLabel('')
    setMinutes('')
    setSeconds('')
  }
  return (
    <header className="header">
      <h1>todos</h1>
      <form className="new-todo-form" onSubmit={onSubmit}>
        <input
          type="text"
          className="new-todo"
          placeholder="Task"
          required
          autoFocus
          onChange={onLabelChange}
          value={label}
        />
        <input
          type="number"
          className="new-todo-form__timer"
          placeholder="Min"
          autoFocus
          required
          onChange={onMinutChange}
          value={minutes}
          min={0}
        />
        <input
          type="number"
          className="new-todo-form__timer"
          placeholder="Sec"
          autoFocus
          required
          onChange={onSecondChange}
          value={seconds}
          min={1}
          max={59}
        />
        <input style={{ display: 'none' }} type="submit" />
      </form>
    </header>
  )
}
NewTaskForm.propTypes = {
  onItemAdded: PropTypes.func.isRequired,
}
export default NewTaskForm
