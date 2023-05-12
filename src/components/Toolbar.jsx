import React from 'react';

function Toolbar(props) {
  const {filters, onSelectFilter } = props
  return (
    <div>
      {filters.map((el, index) => {      
        return (
          <button onClick={(e) => onSelectFilter(el)} key={index}> {el} </button>   
        )
      })}
    </div>
  );
}

export default Toolbar;