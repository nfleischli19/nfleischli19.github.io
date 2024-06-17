import React from 'react';
import '../styles/Work.css';
import ProjectTile from './ProjectTile';

function Work() {
  return (
    <section className="work">
      <h2>My Work</h2>
      <div className="project-tiles">
        <ProjectTile title="Project 1" description="Description of project 1" />
        <ProjectTile title="Project 2" description="Description of project 2" />
        {/* Add more ProjectTile components as needed */}
      </div>
    </section>
  );
}

export default Work;
