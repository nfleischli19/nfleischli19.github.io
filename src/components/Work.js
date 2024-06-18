import React from 'react';
import ProjectTile from './ProjectTile';
import '../styles/Work.css';

function Work() {
  const projects = [
    {
      image: 'path/to/image1.jpg',
      title: 'Project 1',
      description: 'Description of project 1',
      price: '$999 or $41.62/mo. for 24 mo.',
    },
    {
      image: 'path/to/image2.jpg',
      title: 'Project 2',
      description: 'Description of project 2',
      price: '$3499 or $291.58/mo. for 12 mo.',
    },
    // Add more projects as needed
  ];

  return (
    <section className="work-section">
      <h2 className="work-header">My Work</h2>
      <div className="work">
        {projects.map((project, index) => (
          <ProjectTile
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            price={project.price}
          />
        ))}
      </div>
    </section>
  );
}

export default Work;
