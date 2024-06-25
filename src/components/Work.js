import React from 'react';
import ProjectTile from './ProjectTile';
import '../styles/Work.css';


import educare from '../images/educare.png';
import root from '../images/root.png';
import nighthawks from '../images/nighthawks2.png';
import carta from '../images/carta2.png';
import townhall from '../images/townhall.png';
import airways from '../images/airways.png';
import zone from '../images/zone.png';
import discord from '../images/discord2.png';   
import altEdit from '../images/altEdit2.png';

function Work() {
  const projects = [
    {
      id: 'educare-health',
      image: educare,
      title: 'Educare Health',
      description: 'Healthcare Education App for Young Adults', 
      type: 'MOBILE APP',
      primary: 'white',
      secondary: 'black', 
    },
    {
      id: 'root',
      image: root,
      title: 'root',
      description: 'Community Engagement App',
      type: 'MOBILE APP',
      primary: 'black',
      secondary: 'white', 
    },
    {
      id: 'ignite',
      image: nighthawks,
      title: 'IGNITE',
      description: 'Behavior Change Workout App for College Students',
      type: 'MOBILE APP',
      primary: "#E5E4DC",
      secondary: 'black', 
    },
    {
      id: 'cartav2',
      image: carta,
      title: 'Carta V2',
      description: 'Redesign of Carta.com',
      type: 'WEB APP',
      primary: "black",
      secondary: 'white', 
    },
    {
      id: 'townhall',
      image: townhall,
      title: 'TownHall',
      description: 'Social Media App for College Discourse',
      type: 'MOBILE APP',
      primary: "white",
      secondary: 'black', 
    },
    {
      id: 'airways',
      image: airways,
      title: 'Flight Delay Analysis',
      description: 'Data Visualization of Flight Delays in the US',
      type: 'WEB APP',
      primary: "white",
      secondary: 'black', 
      url: "https://cs448b-finalproject.vercel.app/",
    },
    {
      id: 'automated-zone',
      image: zone,
      title: 'Automated Zone Fairness',
      description: 'Evaluating Fairness in Automated Baseball Strike Zones',
      type: 'RESEARCH PROPOSAL',
      primary: "black",
      secondary: 'white', 
    },
    {
      id: 'discord',
      image: discord,
      title: 'Content Moderation',
      description: 'Automated and Manual Content Moderation for Discord Servers',
      type: 'TRUST & SAFETY',
      primary: "black",
      secondary: 'white', 
    },
    {
      id: 'altEdit',
      image: altEdit,
      title: 'AltEdit',
      description: 'Accessible Screenshot tool for BLV users',
      type: 'WEB APP',
      primary: "white",
      secondary: 'black', 
    },
    // Add more projects as needed
  ];

  return (
    <section className="work-section">
      <h2 className="work-header">My Work</h2>
      <div className="work">
        {projects.map((project) => (
          <ProjectTile
            key={project.id}
            id={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            type={project.type}
            primary={project.primary}
            secondary={project.secondary}
            url={project.url}
          />
        ))}
      </div>
    </section>
  );
}

export default Work;
