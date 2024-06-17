import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section className="about">
        <div className='about-text'>
            <h2>About Me</h2>
            <div className="about-content">
                <img src="../images/action.png" alt="Your Name" />
                <p>Detailed description of your background. <a href="https://www.linkedin.com/in/yourprofile">LinkedIn</a> <a href="path/to/resume.pdf">Resume</a></p>
            </div>
            <div className="tools">
                <h3>Tools & Frameworks</h3>
                <p>Showcase the tools and frameworks you use, with graphics.</p>
            </div>
        </div>
    </section>
  );
}

export default About;
