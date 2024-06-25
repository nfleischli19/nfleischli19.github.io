import React, { useEffect } from 'react';
import '../../styles/CartaV2.css'; // Specific CSS file for the project

function CartaV2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="carta-page">
      <div className="header-section">
        <h1>Carta V2</h1>
        <p>AI Course Elective Suggestor Page Product Recommendations</p>
      </div>

      <section className="section-overview">
        <h2>Introduction</h2>
        <p>Carta V2 is a new feature design for Carta.com, a course catalog developed by Stanford University students. The feature aims to incorporate AI-driven course recommendations via a new home explore screen. This project involves preliminary design work for the new feature and identifies necessary risk mitigations for AI implementation. The goal is to enhance the user experience by making elective course selection more intuitive and personalized, helping students discover impactful and unexpected classes that enrich their academic journey. Carta V2 was created in collaboration with Maria Wang.</p>
      </section>

      <section className="section-links">
        <p>Full information about this project can be found at:</p>
        <div className="iframe-container">
          <iframe 
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FznNKFO9cXpsT4dLuYjSQSG%2FProject-3---Nate-and-Maria%3Fnode-id%3D134-53794%26starting-point-node-id%3D134%253A53794%26scaling%3Dcontain%26content-scaling%3Dfixed%26t%3DyMZHo5kq5QRWnF7f-1"
            allowFullScreen
            className="carta-embed"
          ></iframe>
        </div>
        <p><a href="">[Prototype]</a></p>
        <p><a href="https://docs.google.com/spreadsheets/d/1L7kDcgEhqp-VzuCJvcGM1I8hOkzKN755/edit?usp=sharing&ouid=104306250437846948141&rtpof=true&sd=true">[Microsoft HAX Workbook]</a></p>
        <p><a href="https://www.figma.com/file/znNKFO9cXpsT4dLuYjSQSG/Project-3---Nate-and-Maria?type=design&node-id=119-2608&mode=design">[Concept Sketches]</a></p>
      </section>

      <section className="section-problem">
        <h2>Overview</h2>
        <p>What makes a great course? Is it a staple of the core of your degree? Is it a specific professor you’ve randomly come across that is more human than you’ve ever experienced in academia? Is it the group of friends that you got to meet along the way? We argue that the most interesting and impactful classes at Stanford are the least expected ones – the completely random, outside the box, unconventional electives that fill some open units, but whose dots connect in meaningful ways in retrospect. As Steve Jobs so wisely put in his 2005 Stanford Commencement Speech, “you can’t connect the dots looking forward; you can only connect them looking backwards.”</p>
        <p>However, picking these electives is quite hard as they can be buried deep within another department’s catalog. Our goal is to provide an additional tool on Carta that, with some user information, will match the perfect elective for that student. Our hope is that with our tool, the cool unexpected class that might just round off your college experience will come to you, not the other way around.</p>
      </section>

      <section className="section-target">
        <h2>Target Audience</h2>
        <ul>
          <li><strong>Explorers:</strong> Students who have some extra units to fill. They don’t have a specific academic area in mind, but want to explore something new.</li>
          <li><strong>Renaissance Person:</strong> Students who want to venture outside of their major and have a specific interest in mind to pursue. They may already have experience of the subject area and are looking to further their existing knowledge.</li>
          <li><strong>Optimizers:</strong> Students who want to maximize their units, so any electives they would consider taking will also fulfill a WAYS requirement. Alternatively, they also want their electives to obliquely relate to their existing interests.</li>
        </ul>
      </section>

      <section className="section-needs">
        <h2>User Needs</h2>
        <ul>
          <li>All students value a fun and easy A from their electives, as well as interesting content and chill professors.</li>
          <li>All students want to stumble upon an appealing, relevant class that meets their expectations, even if they don’t know their own expectations.</li>
          <li>Explorers want to find a class that they are interested in, even if they have no exposure to the subject area before.</li>
          <li>Renaissance People want to augment their Stanford education with another subject area. This subject area may eventually become a minor, dual major, or dual degree, but at this stage they are still beginning to explore an unfamiliar department or subject area.</li>
          <li>Optimizers still want to explore, but they may have tight unit requirements or schedules so any additional elective must also have another ultimate use to them.</li>
        </ul>
      </section>

      <section className="section-scenarios">
        <h2>Scenarios</h2>
        <h3>Sunny Day Scenarios:</h3>
        <ul>
          <li><strong>Explorer discovers a new class:</strong> Alice is a biology major and is on track to completing her major. She has room to take a fun elective, so she browses Carta for a while to find a class that she might be interested in. On her journey, she finds two classes that she might be interested in: an introductory feminist poetry class and a social impact entrepreneurship seminar. She decides on the poetry class and has a great time reading and writing poetry, something she has no previous experience in. Since taking that class, Alice has continued exploring poetry and now actively reads and writes poetry in her free time.</li>
          <li><strong>Optimizer has fun while advancing his degree:</strong> James is an economics and English double major who takes an above average number of units every quarter. He loves what he’s studying, but he also wants to fulfill his WAYS and take something other than economics or English classes. He browses the Carta tool to find something that fulfills WAYS-SMA in winter quarter, the only quarter he has free units, and he easily finds Sleep and Dreams. He convinces his friends to take it with him and he learns about the importance of sleep while also growing closer with his friends and earning an easy A.</li>
        </ul>

        <h3>Rainy Day Scenarios:</h3>
        <ul>
          <li><strong>Times have changed, and so have WAYS:</strong> John enrolled in the class, but after day 1 of classes, he realizes that the tool was wrong and this elective does not still satisfy the WAYS he needs. Outcome: John goes back to the tool and finds the next best class still available at this point.</li>
          <li><strong>Don’t Take Risks:</strong> Alice ends up requesting a class that is very niche, and chooses one whose summary seems interesting to her. She gets three weeks into the class and realizes that the class is nothing like the summary. After further examination of the class on Carta, there are very few reviews on this class as very few have taken this unique subject area. Outcome: At this point it’s too late to drop. Alice is hesitant to explore random interests in the future due to the uncertainty of the class offerings / tool recommendations.</li>
        </ul>

        <h3>Stress Cases:</h3>
        <ul>
          <li>The tool disproportionately recommends classes taught by white, male professors due to the language used in student class reviews that it uses for popularity metrics.</li>
          <li>Classes that have niche but interesting topics struggle to find a target audience due to the algorithmic matching between the broader student interests and class topics.</li>
          <li>The tool disproportionately recommends the most popular electives. Three things happen:
            <ul>
              <li>Lecturers lose their jobs because students never sign up for their classes.</li>
              <li>There’s not enough recommended electives for the number of students that prompt the tool, leaving meaningless results since a vast majority cannot get into those classes.</li>
              <li>New electives are short-lived as the tool never recommends classes with no reviews.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="section-guidelines">
        <h2>Relevant AI Guidelines</h2>
        <ul>
          <li><strong>Make clear what the system can do and how well:</strong> Prior to engaging with the tool, the system should offer a short, digestible explanation to the tool’s functionality. Throughout student engagement, the system should include design features that encourage and guide users to use their functions.</li>
          <li><strong>Mitigate social biases:</strong> Don’t use personal data about the student to infer their preferences based on stereotypes. Instead, use more relevant data like previous coursework and manually entered student interests to generate suggestions.</li>
          <li><strong>Support efficient correction, learn from user behavior, and encourage granular feedback:</strong> Allow students to provide input if they don’t like what they see. Include an option to “downvote” or “thumbs down” a class recommendation that the student wants to see less of, or to “upvote” or “thumbs up” a class recommendation that they liked. Allow the algorithm to learn from user feedback, especially the student experience after they take a recommended class.</li>
          <li><strong>Make clear why the system did what it did:</strong> Share information about what went into their class recommendations, including which data points contributed to generating a specific recommendation.</li>
          <li><strong>Provide global controls:</strong> Allow the student to select what data goes into the recommendations, and what that data represents. For example, coursework history is a more valuable data point if the student also indicates which classes they enjoyed or disliked. Allow users to turn the recommendations off altogether.</li>
        </ul>
      </section>

      <section className="section-failure">
        <h2>Possible Failure States</h2>
        <ul>
          <li><strong>Input Errors on the Topic Search:</strong> Spelling mistakes or other textual input errors are not restricted and reliant on the user to get right. AI-augmented search would correct for input mistakes to guess at what the user is trying to type.</li>
          <li><strong>Response Generation Errors:</strong> Since we are selecting from an existing set of courses listed, failure to understand user’s interests can result in various errors:
            <ul>
              <li>Mismatch between interests and recommendations</li>
              <li>Low class diversity - If the algorithm focuses too much on one aspect of the user data, or if the user only provides a small amount of data</li>
              <li>Harmful class recommendations - Potential problems if the algorithm has access to identity data like gender or race → Using identity data to generate targeted class recommendations that the user may not appreciate, like too many feminism classes for women-identifying students</li>
              <li>Some recommendations may be insensitive, like recommending a tennis class to a mobility-impaired student who cannot take the class</li>
              <li>Class enrollment imbalances: Some classes may be shown to students more often than others on a large scale, causing some classes to experience extremely high demand while others may suffer from underenrollment</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="section-data">
        <h2>Required Data</h2>
        <ul>
          <li><strong>Required Data:</strong> Previous Carta searches (and ExploreCourses searches if possible), Previous viewed classes and length of time on views, Previous and current pinned classes</li>
          <li><strong>Optional Data:</strong> Student coursework history and student reviews/opinions on previous coursework, Student interests, Student intended major(s) or minor(s)</li>
        </ul>
      </section>

      <section className="section-features">
        <h2>Required Features</h2>
        <h3>FEATURES IN MVP (v1)</h3>
        <ul>
          <li>Dashboard of recommended classes that display class title and description, highlighting the key information that students value when selecting electives</li>
          <li>Filter options like units and topic, etc.</li>
          <li>Multiple displays for categories of recommendations</li>
          <li>Capture class recommendation feedback through “favorites” feature</li>
          <li>User ability to add data, like their opinions on previous coursework</li>
          <li>User ability to change what data the algorithm has access to</li>
        </ul>

        <h3>FUTURE FEATURES (v2+)</h3>
        <ul>
          <li>AI-augmented filter/search options, like detailed descriptions of an ideal class → an actual class recommendation</li>
          <li>Capture clicks on recommendations and have them influence future recommendations</li>
          <li>Capture feedback through “pinned class” feature</li>
          <li>Capture interests through search bar feature or category selection</li>
        </ul>

        <h3>FEATURES OUT</h3>
        <ul>
          <li>Replace entire home page with an electives playground</li>
          <li>Update styling of home screen</li>
        </ul>
      </section>

      <section className="section-comparators">
        <h2>Comparators / Product Inspiration</h2>
        <ul>
          <li>Netflix recommendations</li>
          <li>Dall-e recommendations</li>
          <li>Spotify recommendations</li>
          <li>Youtube category selectors</li>
          <li>Oncourse user interface</li>
          <li>HeyMarvin dashboard</li>
          <li>Reclaim.ai dashboard and explanation of functionality</li>
        </ul>
      </section>

      <section className="section-issues">
        <h2>Open Issues / Questions</h2>
        <ul>
          <li>What datasets do we really need? What additional contextual information should we use for this?</li>
          <li>Will users understand that this part of the dashboard will be for electives?</li>
          <li>How can we separate elective search from course search?</li>
          <li>How can we measure user value? What metrics should we be considering?</li>
          <li>How can we diversify elective offerings so that there doesn’t become a small majority taking over?</li>
        </ul>
      </section>

      <section className="section-review">
        <h2>Review / Stakeholder Team</h2>
        <ul>
          <li>Professors and TAs in various departments and teaching a variety of course types (e.g. lab, seminar, lecture).</li>
          <li>Students from different areas of study, backgrounds, academic priority, etc.</li>
        </ul>
      </section>
    </div>
  );
}

export default CartaV2;
