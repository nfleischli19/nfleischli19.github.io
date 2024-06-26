import React, { useEffect } from 'react';
import '../../styles/Ignite.css'; // Specific CSS file for the project
import ignite_circle from '../../images/ignite_circle.png'; // Image for the project
import ignite_lofi from '../../images/ignite_lofi.png'; // Image for the project
import ignite_sketches from '../../images/ignite_sketches.png'; // Image for the project
import ignite_sketches2 from '../../images/ignite_sketches2.png'; // Image for the project
import ignite_figma from '../../images/ignite_figma.png'; // Image for the project
import ignite_highfi from '../../images/ignite_highfi.png'; // Image for the project
import ignite_styletile from '../../images/ignite_styletile.png'; // Image for the project
import logo from '../../images/logo/ignite_logo.png'; // Image for the project
function Ignite() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-page">
      <section className="section-overview">
        <img src={logo} alt='Ignite Logo' className="project-logo" />
        <h1>Behavior Change App for Exercise</h1>
        <p><strong>Ignite</strong> is a social exercise application designed to help users establish and maintain sustainable workout routines through team challenges and social accountability. This project emerged from CS247B - Design for Behavior Change, recognizing that many individuals struggle with staying motivated and consistent in their fitness efforts. Ignite was completed in collaboration with John Clark, Yishu Chen, and Sophia Ramsey.</p>
        <p>Full information about this project can be found at: <a href="https://docs.google.com/document/d/1Q23lroOZUaOWqTN_XggPt-QwcqqmrMLrXvsI4zxI8No/edit?usp=sharing" className="web-link">[report]</a></p>
        <p> <a href="https://www.figma.com/proto/ISibkb704IXKO1jAEXJIn7/Clickable-Prototype?node-id=188-3158&t=9rtJUrMvX55zekh8-1&scaling=scale-down&content-scaling=fixed&page-id=188%3A1110&starting-point-node-id=233%3A3263&show-proto-sidebar=1" className="web-link">[Prototype]</a></p>
        <p> <a href="https://www.figma.com/design/ISibkb704IXKO1jAEXJIn7/Clickable-Prototype?node-id=188-1110&t=dMfRzbCDpRjzEZF6-1" className="web-link">[Figma]</a></p>
        <div className="iframe-container">
            <iframe 
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FISibkb704IXKO1jAEXJIn7%2FClickable-Prototype%3Fnode-id%3D188-3158%26t%3D9rtJUrMvX55zekh8-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26page-id%3D188%253A1110%26starting-point-node-id%3D233%253A3263%26show-proto-sidebar%3D1" 
                allowfullscreen
                className='ignite-embed'>
            </iframe>
        </div>
     </section>

      <section className="section-problem">
        <h2>The Problem</h2>
        <p>Many people, especially newcomers to fitness, face challenges such as:</p>
        <ul>
          <li><strong>Lack of Motivation:</strong> Difficulty in starting and sticking to workout routines.</li>
          <li><strong>Limited Knowledge:</strong> Inexperience in planning effective workouts.</li>
          <li><strong>Inconsistency:</strong> Struggling to maintain a regular exercise schedule.</li>
        </ul>
      </section>

      <section className="section-solution">
        <h2>The Solution</h2>
        <p>Ignite addresses these challenges by leveraging social dynamics and gamification to make fitness engaging and sustainable. The app incorporates team-based challenges, workout tracking, and social accountability to encourage users to stay active and motivated.</p>
        <ul>
          <li><strong>Team Challenges:</strong> Users join teams to participate in fitness challenges, fostering a sense of community and competition.</li>
          <li><strong>Workout Recommendations:</strong> Personalized exercise suggestions to help users find enjoyable and effective workouts.</li>
          <li><strong>Activity Logging:</strong> A user-friendly interface for logging workouts, tracking progress, and reflecting on achievements.</li>
          <li><strong>Leaderboards:</strong> Displaying individual and team progress to encourage healthy competition and accountability.</li>
        </ul>
      </section>

      <section className="section-development">
        <h2>Development Process</h2>
        <h3>Research and Ideation</h3>
        <h4>Literature Review</h4>
        <p>To inform the design of Ignite, the team conducted a thorough literature review, focusing on studies related to motivation and exercise habits. Two key studies that influenced the design were:</p>
        <ul>
          <li><strong>"Get thee to the gym! A field experiment on improving exercise habits" by Condliffe et al.:</strong> This study found that combining incentives with information feedback and team membership significantly enhances exercise efficacy. It provided a basis for incorporating social feedback and incentives in Ignite.</li>
          <li><strong>"The Effect of Social Support on Athlete Burnout in Weightlifters" by Shang and Yang:</strong> This research highlighted that social support increases mental toughness and motivation, thereby preventing burnout. It underscored the importance of incorporating social accountability within Ignite.</li>
        </ul>
        <h4>Comparator Analysis</h4>
        <p>The team conducted an analysis of existing fitness tools, categorizing them based on:</p>
        <ul>
          <li><strong>Source of Motivation:</strong> Extrinsic (e.g., financial rewards, social affirmation) vs. Intrinsic (e.g., personal development, enjoyment).</li>
          <li><strong>Specificity of Activity:</strong> Tools focused on specific fitness goals versus those promoting general well-being.</li>
        </ul>
        <p>This analysis revealed gaps in the market, particularly the need for a balanced approach that incorporates both extrinsic and intrinsic motivators while accommodating various types of physical activities. Our goal with Ignite is to:</p>
        <ul>
          <li><strong>Balance Motivations:</strong> Use competition and social support for extrinsic motivation, and logging/reflection and progress visualization for intrinsic motivation.</li>
          <li><strong>Optimal Scope:</strong> Accommodate a variety of exercises to support exploration while focusing on beginner to intermediate fitness levels. This ensures that basic functionalities are simple and accessible, with advanced options available for those seeking more.</li>
        </ul>
        <h4>User Research</h4>
        <p><strong>Baseline Study:</strong> To gain deeper insights into users' exercise habits, motivations, and obstacles, the team conducted a baseline study involving:</p>
        <ul>
          <li><strong>Pre-Screener Surveys:</strong> These surveys assessed participants' current exercise habits, satisfaction levels, and motivations. They helped in selecting a representative sample for the study.</li>
          <li><strong>Interviews and Diary Study:</strong> Participants were interviewed to understand their exercise routines, goals, and challenges. They then logged their daily exercise activities and reflections over five days using a structured form. This provided detailed insights into their behaviors and experiences.</li>
        </ul>
        <p>Our study included n=10 participants from which we received 43 total responses over five days, for a success rate of 43/50, or 86%. Going with n=10 participants initially gave us a valuable buffer that allowed some people to miss a day of recording and us to still receive useful data.</p>
      </section>

      <section className="section-theory">
        <h3>Grounded Theory</h3>
        <p>A grounded theory analysis was conducted after the study’s completion led to the following theories:</p>
        <ul>
          <li><strong>Philosophical Foundation:</strong> The core of sustained workout routines lies in a personal philosophy and intrinsic motivation. When individuals exercise for meaningful, internally rewarding reasons rather than external validation, they are more likely to maintain consistency. This deep-seated motivation is crucial for long-term adherence.</li>
          <li><strong>Social Accountability and Group Dynamics:</strong> Social support through group exercises or accountability partners significantly enhances workout consistency. The social element provides a framework for regularity and shared objectives, reducing the likelihood of skipping workouts.</li>
          <li><strong>Social Setting and Progress Measurement:</strong> Setting specific, measurable, and realistic goals helps maintain focus and direction in workout routines. Tracking progress provides a tangible sense of achievement and motivation.</li>
          <li><strong>Loss Aversion:</strong> Establishing a consistent workout routine becomes a driving force, where the discomfort of breaking it outweighs the effort required to follow it. This ensures discipline even on days of low motivation.</li>
          <li><strong>Getting Started:</strong> Initial barriers to exercise, both mental and physical, must be overcome to establish a sustainable routine. Comfort and knowledge about exercise are crucial, and mental resilience often plays a more critical role than physical capability.</li>
        </ul>
        <p>In summary, by understanding these theories, individuals can tailor their approach to fitness in a way that aligns with their motivations, lifestyle, and psychological needs, increasing the likelihood of long-term adherence to workout routines. Exercise means something different to everyone, and making it more satisfying will improve routines and, by extension, lives.</p>
        <p>Everyone acknowledges the benefits of working out and increasing frequency, however, college students are very good at making excuses for missing a workout. To increase frequency, students need to schedule their workouts, compete with friends, visualize metrics, and maintain a frequency that establishes a routine such that missing becomes more tangible.</p>
      </section>

      <section className="section-systems">
        <h3>Systems Thinking</h3>
        <img src={ignite_circle} alt="Connection Circle" className="system-image" />
        <p>There are 2 loops that we can see in the connection circle:</p>
        <ul>
          <li><strong>Exercise->progress->feel good->motivation->exercise more</strong></li>
          <li><strong>Energy->exercise motivation->exercise->more energy</strong></li>
        </ul>
        <p>The first loop is quite intuitive. Progress itself is a positive feedback loop that encourages more motivation for progress. The second loop is less obvious – although exercise may lead to fatigue, it may also lead to more energy as many interview participants brought up.</p>
      </section>

      <section className="section-prototype">
        <h2>Prototype Development</h2>
        <p><strong>Visual Design:</strong> Designed mood boards and style tiles to achieve the theme of the application.</p>
        <img src={ignite_styletile} alt="Style Tile" className="prototype-image" />
        <p><strong>Low-Fidelity Prototype:</strong> Created wireflows and sketches to visualize initial design concepts and gather early feedback (a few examples here).</p>
        <img src={ignite_sketches} alt="Sketches" className="prototype-image" />
        <img src={ignite_sketches2} alt="Low-Fidelity Prototype" className="prototype-image-1" />
        <img src={ignite_lofi} alt="Low-Fidelity Prototype" className="prototype-image-1" />
        <p><strong>Medium-Fidelity Prototype:</strong> Developed core flows for key functionalities such as onboarding, workout exploration, and activity logging. This phase involved iterative testing and refinement based on user feedback.</p>
        <img src={ignite_figma} alt="Medium-Fidelity Prototype" className="prototype-image" />
        <p><strong>High-Fidelity Prototype:</strong> Finalized the design with comprehensive onboarding, improved home screen metrics, and intuitive workout exploration and logging features, incorporating all the feedback received during previous testing phases.</p>
        <img src={ignite_highfi} alt="High-Fidelity Prototype" className="prototype-image" />
      </section>

      <section className="section-testing">
        <h2>Usability Testing</h2>
        <p>Our team conducted usability tests to refine key functionalities:</p>
        <ul>
          <li><strong>Onboarding:</strong> Ensured users could easily join teams and understand app features.</li>
          <li><strong>Workout Exploration:</strong> Evaluated the intuitive use of the Tinder-like swipe feature for finding workouts.</li>
          <li><strong>Activity Logging:</strong> Assessed the ease and effectiveness of logging workouts.</li>
        </ul>
        <p>Key changes based on usability testing included:</p>
        <ul>
          <li>Simplified home screen with clear progress metrics.</li>
          <li>Enhanced workout recommendation cards for better clarity and engagement.</li>
          <li>Comprehensive onboarding tutorial to guide new users through the app's features.</li>
        </ul>
      </section>

      <section className="section-conclusion">
        <h2>Conclusion</h2>
        <p>Ignite transforms fitness into an engaging social experience, combining team challenges and gamification to foster motivation and consistency. The app aims to improve users' physical and mental health by promoting sustainable workout habits through social accountability and structured routines. By addressing the common issues of motivation and consistency, Ignite helps users build lasting fitness habits and achieve their health goals.</p>
      </section>
    </div>
  );
}

export default Ignite;
