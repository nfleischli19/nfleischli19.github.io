import React from 'react';
import '../styles/ProjectTile.css';

function ProjectTile({ title, description }) {
  return (
    <div className="project-tile">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProjectTile;
