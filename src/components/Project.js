import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Project.css';

function Project() {
  const { id } = useParams();
  // Fetch the project details using the id (replace with actual data fetching logic)
  const project = {
    id: id,
    title: 'Project Title',
    description: 'Project Description',
    image: 'path/to/image.png',
  };

  return (
    <div className="project-page">
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
    </div>
  );
}

export default Project;
