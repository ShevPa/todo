import React from 'react'
import PropTypes from 'prop-types'

export default class NewTaskForm extends React.Component {
  static propTypes = {
    onItemAdded: PropTypes.func.isRequired,
  }

  state = {
    label: '',
    minutes: '',
    seconds: '',
  }

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    })
  }

  onMinutChange = (event) => {
    this.setState({
      minutes: event.target.value,
    })
  }

  onSecondChange = (event) => {
    this.setState({
      seconds: event.target.value,
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.onItemAdded(this.state.label, this.state.minutes, this.state.seconds)
    this.setState({
      label: '',
      minutes: '',
      seconds: '',
    })
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form className="new-todo-form" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="new-todo"
            placeholder="Task"
            required
            autoFocus
            onChange={this.onLabelChange}
            value={this.state.label}
          />
          <input
            type="number"
            className="new-todo-form__timer"
            placeholder="Min"
            autoFocus
            onChange={this.onMinutChange}
            value={this.state.minutes}
            min={0}
          />
          <input
            type="number"
            className="new-todo-form__timer"
            placeholder="Sec"
            autoFocus
            onChange={this.onSecondChange}
            value={this.state.seconds}
            min={1}
            max={59}
          />
          <input style={{ display: 'none' }} type="submit" />
        </form>
      </header>
    )
  }
}
