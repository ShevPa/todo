import React from "react";
import PropTypes from "prop-types"

export default class TasksFilter extends React.Component{

  static defaultProps = {
    filterValue: 'All',
  }

  static propTypes = {
    filterValue: PropTypes.string,
    setFilter: PropTypes.func.isRequired,
  }
  
  render(){
    const{filterValue, setFilter} = this.props;
    return (
      <ul className="filters">
          <li>
            <button 
            onClick={()=>setFilter('All')}
            className={filterValue === 'All'? 'selected':''}
            >All</button>
          </li>
          <li>
            <button
            onClick={()=>setFilter('Active')}
            className={filterValue === 'Active'? 'selected':''}
            >Active</button>
          </li>
          <li>
            <button
            onClick={()=>setFilter('Completed')}
            className={filterValue === 'Completed'? 'selected':''}
            >Completed</button>
          </li>
      </ul>
    );
  }
}


