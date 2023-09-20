import React from 'react'
import PropTypes from 'prop-types'

import TasksFilter from '../TasksFilter/tasks-filter'

export default class Footer extends React.Component {
  static defaultProps = {
    toDo: 0,
    filterValue: 'All',
  }

  static propTypes = {
    toDo: PropTypes.number,
    filterValue: PropTypes.string,
    setFilter: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
  }

  render() {
    const { toDo, filterValue, setFilter, clearCompleted } = this.props
    return (
      <footer className="footer">
        <span className="todo-count">{toDo} items left</span>
        <TasksFilter filterValue={filterValue} setFilter={setFilter} />
        <button type="button" className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
    )
  }
}
