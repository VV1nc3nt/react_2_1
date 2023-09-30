import React from 'react'

export default function ProjectsList(props) {
  const { projects } = props;

  let id = 0;

  const renderProjects = projects.map(project => {
    return <img 
            className='project-card'
            src={project.img}
            key={id++}
            alt='just card'
           >

           </img>
  });

  return (
    <div className='projects-list'>{ renderProjects }</div>
  )
}
