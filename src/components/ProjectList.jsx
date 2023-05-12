import React from 'react';

export default function ProjectList(props) {
    const {projects} = props
    return (
      <div>
        { projects.map((el, index) => <div key={index}><img src={el.img} alt='#'/></div>) }
      </div>
    )
  }
