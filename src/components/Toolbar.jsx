import React from 'react';

function Toolbar(props) {
  const {filters, selected, onSelectFilter } = props
  return (
    <div>
      {filters.map((el, index) => { 
        const className = el === selected ? 'filter-selected' : 'filter'     
        return (
          <button onClick={(e) => onSelectFilter(el)} key={index} className={className}> {el} </button>   
        )
      })}
    </div>
  );
}

export default Toolbar;