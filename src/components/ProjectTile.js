import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectTile.css';

function ProjectTile({ id, image, title, description, type, primary, secondary, url, className }) {
  const tileClassName = `project-tile ${className ? className : ''}`;

  const content = (
    <div className={tileClassName} style={{ backgroundColor: primary }}>
      <div className="tile-content" style={{ backgroundColor: primary, color: secondary }}>
        <h5>{type}</h5>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="image-container">
        <img src={image} alt={title} className="tile-image" />
      </div>
    </div>
  );

  return url ? (
    <a href={url} className="project-tile-link" target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    <Link to={`/projects/${id}`} className="project-tile-link">
      {content}
    </Link>
  );
}

export default ProjectTile;
