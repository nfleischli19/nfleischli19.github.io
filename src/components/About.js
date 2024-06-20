import React from 'react';
import '../styles/About.css';
import ToolTile from './ToolTile';
import pitching from '../images/pitching.png'; // Adjust the path accordingly
import altEdit from '../images/altEdit.png'; // Example tool image, adjust path accordingly

function About() {
  const tools = [
    {
      image: altEdit,
      title: 'AltEdit',
      description: 'Accessible Screenshot tool for BLV users',
      primary: "white",
      secondary: 'black', 
    },
    // Add more tool objects here
  ];

  return (
    <section className="about">
      <div className="about-text">
        <h2>About Me</h2>
        <AboutContent />
        <Tools tools={tools} />
      </div>
      <div className="about-image">
        <img src={pitching} alt="Your Name" />
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
      <h3>Tools & Frameworks</h3>
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
  );
}

export default About;
