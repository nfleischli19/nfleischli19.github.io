import React from 'react';
import '../styles/BlogTile.css';

function BlogTile({ title, summary }) {
  return (
    <div className="blog-tile">
      <h3>{title}</h3>
      <p>{summary}</p>
    </div>
  );
}

export default BlogTile;
