import React, { useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

function Task({ task, onDeleted, onCompleted, onEditing, onEditingDescription, playTimer, pauseTimer }) {
  const { isCompleted, description, date, minutes, seconds } = task
  const [label, setLabel] = useState(description)

  const onKeyUp = (event) => {
    setLabel(event.target.value)
    if (event.key === 'Enter') {
      onEditingDescription(task.id, label)
    }
  }
  return (
    <>
      <div className="view">
        <input className="toggle" type="checkbox" checked={isCompleted} onChange={onCompleted} />
        <label>
          <span className="title">{description}</span>
          <span className="description">
            <button type="button" className="icon icon-play" onClick={playTimer} />
            <button type="button" className="icon icon-pause" onClick={pauseTimer} />
            {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </span>
          <span className="description">created {formatDistanceToNow(date)} ago</span>
        </label>
        <button type="button" className="icon icon-edit" onClick={onEditing} />
        <button type="button" className="icon icon-destroy" onClick={onDeleted} />
      </div>
      <input type="text" className="edit" defaultValue={label} onKeyUp={onKeyUp} />
    </>
  )
}

Task.defaultProps = {
  isCompleted: false,
  description: 'Text',
  date: new Date(),
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  onDeleted: PropTypes.func.isRequired,
  onCompleted: PropTypes.func.isRequired,
  onEditing: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool,
  description: PropTypes.string,
  date: PropTypes.instanceOf(Date),
}
export default Task
