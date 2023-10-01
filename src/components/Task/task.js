import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import PropTypes from 'prop-types'

export default class Task extends React.Component {
  static defaultProps = {
    isCompleted: false,
    description: 'Text',
    date: new Date(),
  }

  static propTypes = {
    task: PropTypes.object.isRequired,
    onDeleted: PropTypes.func.isRequired,
    onCompleted: PropTypes.func.isRequired,
    onEditing: PropTypes.func.isRequired,
    isCompleted: PropTypes.bool,
    description: PropTypes.string,
    date: PropTypes.instanceOf(Date),
  }

  state = {
    label: this.props.task.description,
  }

  onKeyUp = (event) => {
    this.setState({
      label: event.target.value,
    })
    if (event.key === 'Enter') {
      this.props.onEditingDescription(this.props.task.id, this.state.label)
    }
  }

  render() {
    const { task, onDeleted, onCompleted, onEditing, playTimer, pauseTimer } = this.props
    const { isCompleted, description, date, minutes, seconds } = task
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
        <input type="text" className="edit" defaultValue={this.state.label} onKeyUp={this.onKeyUp} />
      </>
    )
  }
}
