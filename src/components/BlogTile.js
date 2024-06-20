import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BlogTile.css';

function BlogTile({ id, image, title, summary, date, primary, secondary}) {
  return (
    <div className="blog-tile" style={{ backgroundColor: primary }}>
      <Link to={`/blog/${id}`}>
        <img src={image} alt={title} className="tile-image" />
        <div className="tile-content" style={{ backgroundColor: primary, color: secondary }}>
          <h3>{title}</h3>
          <p>{summary}</p>
          {date && <p className="tile-price">{date}</p>}
        </div>
      </Link>
    </div>
  );  
}

export default BlogTile;
