// src/projects/EducareHealth.js
import React from 'react';
import '../../styles/EducareHealth.css'; // Specific CSS file for the project

function EducareHealth() {
  return (
    <div className="project-page">
      <h1>Educare Health</h1>
      <p>Healthcare Education App for Young Adults</p>

      <section className="section section-overview">
        <h2>Project Overview</h2>
        <p><strong>Mission Statement:</strong> Our mission is to educate students about their healthcare to prepare them for all life moments, expected and unexpected.</p>
        <p><strong>Problem and Solution:</strong> College-aged students often lack education about healthcare. EduCare addresses this by engaging young people through a gamified mobile application, promoting preventative care and health awareness.</p>
      </section>

      <section className="section section-research">
        <h2>User Research</h2>
        <p>We conducted interviews with diverse participants to understand their healthcare experiences and identified key barriers such as time, empathy, and uncertainty. Our findings informed the design and development of EduCare.</p>
        <div className="images">
          {/* Replace with actual images */}
          <img src="path/to/your/image1.jpg" alt="Interview process" />
          <img src="path/to/your/image2.jpg" alt="Empathy maps" />
        </div>
      </section>

      <section className="section section-design">
        <h2>Design and Prototyping</h2>
        <p><strong>Process:</strong></p>
        <ul>
          <li><strong>Lo-fi Prototype:</strong> Initial sketches to test basic concepts.</li>
          <li><strong>Med-fi Prototype:</strong> Refined digital designs incorporating user feedback.</li>
          <li><strong>Hi-fi Prototype:</strong> Developed using React Native and Expo CLI, focusing on a polished user experience.</li>
        </ul>
        <p><strong>Key Features:</strong></p>
        <ul>
          <li>Daily Fun Facts: Users receive and engage with daily healthcare facts.</li>
          <li>Scavenger Hunt: An interactive game to learn about health topics.</li>
          <li>Sharing and Community: Users share facts and engage in discussions with peers.</li>
        </ul>
        <div className="images">
          {/* Replace with actual images */}
          <img src="path/to/your/image3.jpg" alt="Lo-fi prototype" />
          <img src="path/to/your/image4.jpg" alt="Med-fi prototype" />
          <img src="path/to/your/image5.jpg" alt="Hi-fi prototype" />
        </div>
      </section>

      <section className="section section-development">
        <h2>Development and Implementation</h2>
        <p>We built the high-fidelity prototype with React Native and Expo CLI, focusing on core functionalities such as daily fun facts, scavenger hunts, and sharing features. Hardcoded data was used for testing purposes, with plans for backend integration.</p>
      </section>

      <section className="section section-testing">
        <h2>Usability Testing and Evaluation</h2>
        <p>We conducted usability testing sessions and heuristic evaluations to refine the user experience. Feedback was used to improve interface elements and ensure the app's usability.</p>
        <div className="images">
          {/* Replace with actual images */}
          <img src="path/to/your/image6.jpg" alt="Usability testing" />
          <img src="path/to/your/image7.jpg" alt="Heuristic evaluation" />
        </div>
      </section>

      <section className="section section-reflection">
        <h2>Reflections and Future Steps</h2>
        <p>Building EduCare taught us the importance of a user-centered approach and iterative design. Future plans include completing functionality, implementing a backend, and tailoring healthcare information to individual user needs.</p>
        <p><strong>Team Reflection:</strong> We are proud of our work, which represents our dedication and innovation in creating a valuable healthcare education tool for students.</p>
      </section>

      <section className="section section-skills">
        <h2>Skills and Tools</h2>
        <ul>
          <li><strong>Project Management:</strong> Effective planning and organization.</li>
          <li><strong>User Research:</strong> Interviewing, empathy mapping, and synthesizing insights.</li>
          <li><strong>Design Tools:</strong> Figma, Adobe Illustrator.</li>
          <li><strong>Development:</strong> React Native, Expo CLI.</li>
          <li><strong>Testing:</strong> Usability testing, heuristic evaluation.</li>
          <li><strong>Soft Skills:</strong> Teamwork, communication, problem-solving.</li>
        </ul>
      </section>
    </div>
  );
}

export default EducareHealth;
