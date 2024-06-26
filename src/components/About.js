import React from 'react';
import '../styles/About.css';
import ToolTile from './ToolTile';
import pitching from '../images/pitching.png'; // Adjust the path accordingly
import designthink from '../images/designthink.png'; // Example tool image, adjust path accordingly
import POVs from '../images/POVs.png'; // Example tool image, adjust path accordingly
import HMW from   '../images/HMW.png'; // Example tool image, adjust path accordingly
import AssumptionTest from '../images/AssumptionTest.png'; // Example tool image, adjust path accordingly
import empathymap from '../images/empathymap.png'; // Example tool image, adjust path accordingly
import visual from '../images/visual.png'; // Example tool image, adjust path accordingly
import sketches from '../images/Sketches.png'; // Example tool image, adjust path accordingly
import userflows from '../images/userflows.png'; // Example tool image, adjust path accordingly
import MedFi from '../images/MedFi.png'; // Example tool image, adjust path accordingly
import groundedTheory from '../images/groundedTheory.png'; // Example tool image, adjust path accordingly

function About() {
  const visualD = [
    
  ];
  const tools = [
    {
      image: designthink,
      title: 'Design Thinking',
      primary: "white",
      secondary: 'black', 
    },
    {
      image: empathymap,
      title: 'Empathy Maps',
      primary: "#525659",
      secondary: 'black', 
    },
    {
      image: groundedTheory,
      title: 'Grounded Theory',
      primary: "white",
      secondary: 'black',
    },
    {
      image: POVs,
      title: 'POVs',
      primary: "#FBF7FF",
      secondary: 'black', 
    },
    {
      image: HMW,
      title: 'HMWs',
      primary: "white",
      secondary: 'black', 
    },
    {
      image: AssumptionTest,
      title: 'Assumption Evalutions',
      primary: "white",
      secondary: 'black', 
    },
    {
      image: visual,
      title: 'Mood Boards & Style Tiles',
      primary: "white",
      secondary: 'black',
    },
    {
      image: sketches,
      title: 'Rapid Sketches',
      primary: "white",
      secondary: 'black',
    },
    {
      image: userflows,
      title: 'User Flows',
      primary: "white",
      secondary: 'black',
    },
    {
      image: MedFi,
      title: 'Figma Prototypes',
      primary: "white",
      secondary: 'black',
    },
    
    // Add more tool objects here
  ];

  return (
    <section className="about">
      <div className='about-container'>
        <div className="about-text">
          <h2>About Me</h2>
          <AboutContent />
        </div>
        <div className="about-image">
          <img src={pitching} alt="Your Name" />
        </div>
      </div>
      <div className='tools-section'>
        <h2>Tools & Frameworks</h2>
        <Tools tools={tools} />
      </div>
    </section>
  );
}

function AboutContent() {
  return (
    <div className="about-content">
      <p>
        Born and raised in the Bay Area, I had the incredible opportunity to play baseball at Stanford University. During my five seasons with the Cardinal, I contributed to winning two Pac-12 championships and making three College World Series appearances, despite facing a major setback with Tommy John surgery in my fourth season. I feel incredibly grateful to have been part of such an esteemed program, guided by future Hall of Fame skipper Dave Esquer. You can read more about the invaluable lessons I learned along the way in my blog below.
      </p>
      <p>
        Academically, I pursued my passion for computer science, earning both a Bachelor's and Master's degree by June 2024. My undergraduate studies focused on Artificial Intelligence, while my graduate concentration was in Human-Computer Interaction (HCI). HCI is an interdisciplinary field that combines computer science, design, and psychology to critically evaluate technical systems and understand user interactions. We explore questions like, "What does it mean for technology to be human-centered?", "What is the appropriate UI vocabulary for users' mental models?", and "What are the shortcomings of these designs in specific contexts?" I've fallen in love with this work—utilizing design frameworks from the Stanford d.school for needfinding and rapid prototyping, understanding the psychological principles behind human behavior, and developing solutions from end to end.
      </p>
      <p>
        Inspired by HCI trailblazers like Vannevar Bush (Memex), Ivan Sutherland (Sketchpad), Doug Engelbart (chorded keyboard, mouse, hypertext), Alan Kay (Dynabook, Xerox Star), Allen Newell (GOMS models), Don Norman (The Design of Everyday Things), Ben Shneiderman (direct manipulation), and Pattie Maes (autonomous agents), I am excited to contribute to the fourth wave of HCI. As ubiquitous computing becomes a reality, I believe we can leverage longitudinal data and scientific advancements to address long-standing issues in health, education, and the environment. The real challenge ahead is using this data for effective human-behavioral interventions — helping individuals become the best versions of themselves.
      </p>
      <p>
        I am deeply thankful to the Stanford HCI department, particularly Professor James Landay, Professor Michael Bernstein, Professor Maneesh Agrawala, Professor Julie Stanford, and PhD Joon Park, for their incredible mentorship throughout my Master's program. I look forward to collaborating with them again in the future.
      </p>
      <p>
        “The best way to predict the future is to invent it.” - Alan Kay
      </p>
      <p>
        <a href="https://www.linkedin.com/in/natefleischli/" className="button">LinkedIn</a>
      </p>
    </div>
  );
}

function Tools({ tools }) {
  return (
    <div className="tools">
      <div className='tools-container'>
        {tools.map((tool, index) => (
          <ToolTile
            key={index}
            image={tool.image}
            title={tool.title}
            description={tool.description}
            primary={tool.primary}
            secondary={tool.secondary}
          />
        ))}
      </div>
    </div>
  );
}

export default About;
