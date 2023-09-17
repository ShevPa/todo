import React from "react";
import { formatDistanceToNow } from "date-fns";


  const Task = (props)=> {
    return (
      <>
        <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{props.description}</span>
          <span className="created">created {formatDistanceToNow(props.date)} ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
      <input type='text' className='edit' defaultValue={props.description}/>
      </>
      
    );
}
export default Task