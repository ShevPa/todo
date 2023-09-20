import React from 'react'
import PropTypes from 'prop-types'

export default class NewTaskForm extends React.Component {
  static propTypes = {
    onItemAdded: PropTypes.func.isRequired,
  }

  state = {
    label: '',
  }

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value,
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.onItemAdded(this.state.label)
    this.setState({
      label: '',
    })
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={this.onLabelChange}
            value={this.state.label}
          />
        </form>
      </header>
    )
  }
}
