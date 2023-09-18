import React from "react";
import { formatDistanceToNow } from "date-fns";


  export default class Task extends React.Component{

    state={
      label: this.props.task.description      
    }
    onKeyUp= (event) => {
      this.setState({
          label: event.target.value
      });
      if(event.key === 'Enter'){
          this.props.onEditingDescription(this.props.task.id, this.state.label)
      }
  };

    render(){
      const {task, onDeleted, onCompleted, onEditing} = this.props;
      const {isCompleted, description, date} = task;
      return (
        <>
          <div className="view">
            <input className="toggle" type="checkbox"
             checked={isCompleted} onChange = {onCompleted} />
            <label onClick={onCompleted}>
              <span className="description">{description}</span>
              <span className="created">created {formatDistanceToNow(date)} ago</span>
            </label>
            <button className="icon icon-edit"
            onClick={onEditing}></button>
            <button className="icon icon-destroy" 
            onClick={onDeleted}></button>
          </div>
          <input type='text' className='edit'
          defaultValue={description}
          onKeyUp = {this.onKeyUp}
          />
        </>       
      );
    }
    
}