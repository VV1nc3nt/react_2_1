import React from 'react'

export default function Toolbar(props) {
 const { filters, selected, onSelectFilter } = props;

 let id = 0;

 const renderFilters = filters.map(filter => {
  if (filter === selected) {
    return <button 
            key={id++}
            className='projects-selector selected-filter'
            onClick={onSelectFilter}
          >
            {filter}
         </button>  
  }
  return <button 
            key={id++}
            className='projects-selector'
            onClick={onSelectFilter}
          >
            {filter}
         </button>
 });

  return (
    <div className='filter-items'>{ renderFilters }</div>
  )
}
