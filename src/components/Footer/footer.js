import React from 'react'
import PropTypes from 'prop-types'

import TasksFilter from '../TasksFilter/tasks-filter'

function Footer({ toDo, filterValue, setFilter, clearCompleted }) {
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
Footer.defaultProps = {
  toDo: 0,
  filterValue: 'All',
}

Footer.propTypes = {
  toDo: PropTypes.number,
  filterValue: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
}
export default Footer
