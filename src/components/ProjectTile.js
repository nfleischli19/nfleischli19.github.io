import React from 'react';
import '../styles/ProjectTile.css';

function ProjectTile({ image, title, description, price }) {
  return (
    <div className="project-tile" style={{ backgroundImage: `url(${image})` }}>
      <div className="tile-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {/* {price && <p className="tile-price">{price}</p>} */}
      </div>
    </div>
  );
}

export default ProjectTile;
