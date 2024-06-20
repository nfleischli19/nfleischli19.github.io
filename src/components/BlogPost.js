import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();
  // Fetch blog post details using the id
  // Replace with actual data fetching logic
  const blogPost = {
    id: id,
    title: 'Blog Post Title',
    content: 'Blog Post Content',
  };

  return (
    <div className="blog-post-page">
      <h1>{blogPost.title}</h1>
      <p>{blogPost.content}</p>
    </div>
  );
}

export default BlogPost;
