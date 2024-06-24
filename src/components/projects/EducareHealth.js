// src/projects/EducareHealth.js
import React, {useEffect} from 'react';
import '../../styles/EducareHealth.css'; // Specific CSS file for the project
import logo from '../../images/logo/educare_logo.png'; // Image for the project
import empathymap from '../../images/empathymap.png'; // Additional images for the project
import POVs from '../../images/POVs.png'; // Additional images for the project
import process from '../../images/process.png'; // Additional images for the project
import educare_lofi from '../../images/educare_lofi.png'; // Additional images for the project
import educare_medfi from '../../images/educare_medfi.png'; // Additional images for the project


function EducareHealth() {
  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* <div className='logo'>
        <img src={logo} alt='Educare Health Logo' className="project-logo" />
      </div> */}
      <div className="project-page">
        <img src={logo} alt='Educare Health Logo' className="project-logo" />

        <h1>Healthcare Education App for Young Adults</h1>
        <section className="section-overview">
          <h2>Project Overview</h2>
          <p>EduCare is a platform designed to engage young adults who are unfamiliar with the healthcare system by offering a variety of learning opportunities including daily factoids, scavenger hunts, quizzes, and direct messaging with friends. This project was designed and built in collaboration with Brenden Koo (Lead Designer).</p>
          <p>Full information about this project can be found at <a href="https://hci.stanford.edu/courses/cs147/2022/au/projects/EquitableHealthcare/EduCare/">[website]</a></p>
          <p>Full report <a href="https://hci.stanford.edu/courses/cs147/2022/au/projects/EquitableHealthcare/EduCare/assets/files/final.pdf">[link]</a></p>
          <div className="video-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Az-K_aHVMY4?si=KNRL1wfR_Gr1ijlw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </section>

        <section className="section-introduction">
          <h2>Introduction</h2>
          <p>The problem we addressed was the lack of healthcare education among young adults, who often depend on their parents' health insurance until they turn 26. Through an inclusive needfinding process, we discovered that young people recognize the importance of understanding healthcare but are generally uninformed about how it works. EduCare aims to fill this gap by educating users in a fun and engaging way, ultimately leading to better health outcomes and a more informed society.</p>
        </section>

        <section className="section-process">
          <h2>Process</h2>
          <p>We followed the Stanford d.school’s design thinking process for all stages of this project:</p>

          <h3>Empathize</h3>
          <p><strong>Needfinding Interviews:</strong> We conducted interviews with six individuals representing a wide range of characteristics relevant to our problem, including patients with various healthcare experiences and medical professionals. This diverse participant pool helped us uncover key barriers such as time constraints, lack of empathy from healthcare providers, and uncertainty about navigating the healthcare system. For instance, a young professional expressed frustration about the complexity of health insurance policies, while a medical professional highlighted the challenges of managing a high patient volume.</p>
          <p><strong>Empathy Maps:</strong> After each interview, we created empathy maps to capture and synthesize participants' words, actions, thoughts, and feelings. These maps helped us deeply understand their experiences and pinpoint their core needs and frustrations. For example, one participant's empathy map revealed a strong desire for clearer communication from doctors, which informed our design focus on enhancing user engagement with healthcare information.</p>
          <img src={empathymap} alt='Empathy Map' className="empathy-map" />

          <h3>Define</h3>
          <p><strong>POVs (Point of View Statements):</strong> We distilled the insights from our three most insightful interviews into POV statements. These statements reframed the problem by highlighting the user, their needs, and the surprising insights we discovered. For example, a POV might state: "Chris, a 30-year-old teacher, struggles to understand his health insurance policy due to its convoluted language, which makes him anxious about making informed decisions about his healthcare."</p>
          <img src={POVs} alt='Empathy Map' className="empathy-map" />
          <p><strong>Experience Prototypes:</strong> We brainstormed potential solutions based on our POVs and created experience prototypes to test our ideas. These prototypes were simple, early versions of our final product that allowed us to explore different solutions and gather feedback from users. For instance, we tested a scavenger hunt game to see if gamifying healthcare information could increase engagement.</p>

          <h3>Ideate</h3>
          <p><strong>HMWs (How Might We Statements):</strong> From our gamechanger insights, we formulated "How Might We" statements to guide our brainstorming sessions. These statements focused on bridging the gap between identified problems and potential solutions. For example, "How might we make health insurance policies fun and easy to understand for young adults?"</p>
          <p><strong>Solutions:</strong> We encouraged "yes and" thinking to generate a wide range of ideas, including outlandish ones that could spark innovative connections. We then evaluated our ideas through heat-map voting to identify the most promising solutions. For instance, we considered various gamification techniques before settling on daily factoids and scavenger hunts as engaging ways to educate users about healthcare.</p>
          <img src={process } alt='POV to HMW to SOL iteration' className="empathy-map" />

          <h3>Prototype</h3>
          <p><strong>Low-Fidelity Prototypes:</strong> We used rapid sketching to create paper prototypes of our solutions and tested them with users to identify gaps and new needs. These low-fidelity prototypes allowed us to quickly iterate on our ideas based on user feedback. For example, we tested different ways to present daily healthcare factoids and adjusted the design based on user preferences.</p>
          <img src={educare_lofi} alt='Low Fidelity Prototype' className="empathy-map" />
          <p><strong>Medium-Fidelity Prototypes:</strong> We developed a clickable prototype using Figma, incorporating feedback from our low-fidelity tests. This medium-fidelity prototype underwent several rounds of peer feedback and heuristic evaluations to refine the design and ensure usability. For example, we adjusted the navigation and interface elements to make them more intuitive.</p>
          <img src={educare_medfi} alt='Medium Fidelity Prototype' className="empathy-map" />
          <p><strong>High-Fidelity Prototype:</strong> The final prototype was implemented using React Native on Expo Go. This high-fidelity version included all the features and design elements from our medium-fidelity prototype, offering a realistic experience for user testing. For example, users could now interact with the full range of EduCare’s functionalities, including daily factoids, quizzes, and scavenger hunts.</p>

          <h3>Test</h3>
          <p><strong>Heuristic Evaluation:</strong> We conducted heuristic evaluations with four students to identify usability issues and areas for improvement. This process involved navigating through our Figma prototype and rating heuristic violations on a severity scale. For example, we discovered that certain icons were too small and made adjustments to improve accessibility and user experience.</p>
        </section>

        <section className="section-lessons-learned">
          <h3>Lessons Learned</h3>
          <ul>
            <li><strong>Needfinding and User Empathy:</strong> Understanding users' real needs and pain points through direct engagement.</li>
            <li><strong>Iterative Design:</strong> The importance of prototyping and user testing to refine ideas continuously.</li>
            <li><strong>Teamwork and Communication:</strong> Effective collaboration and communication are crucial for project success, especially under tight deadlines.</li>
          </ul>
        </section>

        <section className="section-skills-gained">
          <h3>Skills Gained</h3>
          <ul>
            <li><strong>Needfinding:</strong> Interviewing, identifying pain points, and developing user-centered solutions.</li>
            <li><strong>Rapid Prototyping:</strong> Creating and testing low to high-fidelity prototypes efficiently.</li>
            <li><strong>Design Tools:</strong> Proficiency in Figma for design and React Native for app development.</li>
            <li><strong>Project Management:</strong> Managing a complex project from ideation to implementation within a short timeframe.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default EducareHealth;
