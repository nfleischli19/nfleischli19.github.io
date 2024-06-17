import React from 'react';
import '../styles/Blog.css';
import BlogTile from './BlogTile';

function Blog() {
  return (
    <section className="blog">
      <h2>Blog</h2>
      <div className="blog-tiles">
        <BlogTile title="Blog Post 1" summary="Summary of blog post 1" />
        <BlogTile title="Blog Post 2" summary="Summary of blog post 2" />
        {/* Add more BlogTile components as needed */}
      </div>
    </section>
  );
}

export default Blog;
