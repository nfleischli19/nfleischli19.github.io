import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectTile.css';

function ProjectTile({ id, image, title, description, type, primary, secondary }) {
  return (
    <Link to={`/projects/${id}`} className="project-tile-link">
      <div className="project-tile" style={{ backgroundColor: primary }}>
        <div className="tile-content" style={{ backgroundColor: primary, color: secondary }}>
          <h3>{title}</h3>
          <p>{description}</p>
          <h5>{type}</h5>
        </div>
        <div className="image-container">
          <img src={image} alt={title} className="tile-image" />
        </div>
      </div>
    </Link>
  );
}

export default ProjectTile;
