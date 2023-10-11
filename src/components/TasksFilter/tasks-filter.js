import React from 'react'
import PropTypes from 'prop-types'

function TasksFilter({ filterValue, setFilter }) {
  return (
    <ul className="filters">
      <li>
        <button type="button" onClick={() => setFilter('All')} className={filterValue === 'All' ? 'selected' : ''}>
          All
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => setFilter('Active')}
          className={filterValue === 'Active' ? 'selected' : ''}
        >
          Active
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={() => setFilter('Completed')}
          className={filterValue === 'Completed' ? 'selected' : ''}
        >
          Completed
        </button>
      </li>
    </ul>
  )
}

TasksFilter.defaultProps = {
  filterValue: 'All',
}

TasksFilter.propTypes = {
  filterValue: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
}
export default TasksFilter
