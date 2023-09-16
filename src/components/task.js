import React from "react";

const Task = ({state = null, description}) => {
    return (
        <li className={state}>
            <div className="view">
              <input className="toggle" type="checkbox"/>
              <label>
                <span className="description">{description}</span>
                <span className="created">created 5 minutes ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
        </li>
    );
};
export default Task;