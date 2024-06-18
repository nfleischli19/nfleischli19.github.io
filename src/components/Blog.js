import React from 'react';
import BlogTile from './BlogTile';
import '../styles/Blog.css';

function Blog() {
  const blogPosts = [
    {
      image: 'path/to/image1.jpg',
      title: 'Post 1',
      description: 'Description of post 1',
    },
    {
      image: 'path/to/image2.jpg',
      title: 'Post 2',
      description: 'Description of post 2',
    },
    // Add more blog posts as needed
  ];

  return (
    <section className="blog-section">
      <h2 className="blog-header">Blog</h2>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <BlogTile
            key={index}
            image={post.image}
            title={post.title}
            description={post.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Blog;
