import React from 'react';
import '../styles/ToolTile.css';

function ToolTile({ image, title, description, primary, secondary }) {
  return (
    <div className="tool-tile-container" style={{ backgroundColor: primary }}>
      <img src={image} alt={title} className="tool-tile-image" />
      <div className="tool-tile-content" style={{  color: secondary }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );  
}

export default ToolTile;
