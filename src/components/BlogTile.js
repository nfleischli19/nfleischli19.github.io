import React from 'react';
import '../styles/BlogTile.css';

function BlogTile({ image, title, description }) {
  return (
    <div className="blog-tile">
      <img src={image} alt={title} className="blog-tile-image" />
      <div className="blog-tile-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default BlogTile;
