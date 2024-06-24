// src/projects/Root.js
import React, {useEffect} from 'react';
import '../../styles/Root.css'; // Specific CSS file for the project
import logo from '../../images/logo/rootlogo.png'; // Image for the project


function Root() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="project-page">
      <div className="header-section">
        {/* <h1>root</h1> */}
        <img src={logo} alt='root Logo' className="project-logo" />
        <h1>Community Engagement App</h1>
      </div>

      <section className="section-overview">
        <h2>Project Overview</h2>
        <p><strong>Introduction:</strong> root is a community-focused application that aims to address the challenges of engaging new community members and motivating individuals to contribute actively to their communities. This project was designed and built in collaboration with John Clark, Tristan Sinclair, Elysia Smyers, and Lyndsea Warkenthien.</p>
        <p>Full information about this project can be found at: <a href="https://web.stanford.edu/class/cs194h/projects/root/" className="web-link">[website]</a></p>
        <p>Full report <a href="https://docs.google.com/document/d/1m8wnW224DxzvKszgWJKmvA2DepbHWhJo_ja6bddmwVk/edit?usp=sharing" className="report-link">[link]</a></p>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/L41OWoUMy74?si=lXuU1SsmggTIaX8A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </section>

      <section className="section-problem">
        <h2>Problem & Solution</h2>
        <p>Communities often face difficulties in engaging new members and maintaining the interest of existing ones. Additionally, individuals want to contribute to their communities but often lack the motivation or means to do so effectively. Initially, the problem focused on addressing loneliness and isolation during lifestyle transitions. This scope was later broadened to explore the mutual benefits that both communities and their members can derive from each other.</p>
        <p>root seeks to unite communities by offering innovative ways for users to connect, engage, and live. Users join local and large-scale communities to contribute to communal goals by participating in shared challenges. These challenges can range from environmental tasks like "plant 50 trees" to fitness goals such as "run 100 miles." Users can join multiple communities, contributing to various challenges that align with their interests and values.</p>
      </section>

      <section className="section-features">
        <h2>Key Features and Functionality</h2>
        <ul>
          <li><strong>Simple Task:</strong> Users log their activities towards community goals via a Floating Action Button (FAB). This feature is designed to be intuitive and easily accessible from the main screen, encouraging frequent use.</li>
          <li><strong>Medium Task:</strong> Users create their own communities, providing them with the autonomy to set community names, locations, descriptions, and privacy settings. This functionality empowers users to foster new groups centered around specific interests or objectives.</li>
          <li><strong>Complex Task:</strong> Users can create fully customizable challenges for their communities. These challenges form the core functionality of the app, driving community engagement and participation. Community managers can tailor challenges to their community's themes and objectives, whether they are service-oriented or physically demanding.</li>
        </ul>
      </section>

      <section className="section-design">
        <h2>Design Evolution</h2>
        <p>The project began with enosi, Elysia’s and Lyndsea’s former project that focused on shared exercise goals to promote physical and mental wellness. It aimed to connect individuals through common fitness objectives, like collectively climbing the elevation of Mount Everest. We expanded on this idea by pivoting into root, shifting the focus from individual wellness to broader community engagement. The design became more playful and community-oriented, emphasizing collective contributions to various types of challenges.</p>
      </section>

      <section className="section-implementation">
        <h2>Implementation</h2>
        <ul>
          <li>Developed using React Native with a Supabase backend.</li>
          <li>Core functionalities include user authentication, community and challenge management, and activity logging.</li>
          <li>A seamless integration of front-end and back-end technologies ensures a responsive and interactive user experience.</li>
        </ul>
      </section>

      <section className="section-ui">
        <h2>User Interface and Prototypes</h2>
        <p>We conducted two rounds of usability testing and three rounds of UI iteration. Usability tests were done by individuals from the local community with a breadth of backgrounds.</p>
        <ul>
          <li><strong>High-Fidelity Prototype V1:</strong> This version incorporated the initial design elements and core functionalities, such as logging activities, adding friends, and creating communities.</li>
          <li><strong>High-Fidelity Prototype V2:</strong> Transitioned from enosi to root, focusing on improving user accessibility and overall experience. Key changes included rebranding, enhancing the navigation bar, and simplifying the activity logging process.</li>
          <li><strong>Final Prototype V3:</strong> Based on feedback from users, the final prototype emphasized community contributions and streamlined navigation. Major updates included a redesigned home screen, an enhanced search functionality, and a more intuitive challenge management system.</li>
        </ul>
      </section>

      <section className="section-business">
        <h2>Business Model</h2>
        <p>In addition to developing the application, we also considered a business model for launching the application. We received feedback from Manu Kumar, founder of K9 Ventures and serial startup founder, who guided us through various options in the process.</p>
        <h3>Revenue Strategy</h3>
        <ul>
          <li><strong>Dual Revenue Stream:</strong> Free Version: Ensures broad accessibility and engagement. Pro Version: Offers enhanced features for a subscription fee. Additional revenue sources include sponsorships from non-profits and corporations, and targeted advertising.</li>
        </ul>
        <h3>Customer Segments</h3>
        <ul>
          <li><strong>Primary Segment:</strong> Individuals and social community members passionate about public health and meaningful community engagement.</li>
          <li><strong>Secondary Segment:</strong> Non-profits and corporations looking to sponsor community challenges, attracted by the platform’s focus on health and well-being.</li>
        </ul>
        <h3>Market Opportunity</h3>
        <p>The platform targets affluent, philanthropically inclined regions like the Bay Area, CA. By leveraging channels such as civic engagement centers, college campuses, and community events, root aims to tap into a substantial user base seeking a more purposeful and connected experience.</p>
      </section>

      <section className="section-impact">
        <h2>Long-term Impact</h2>
        <ul>
          <li><strong>Community Engagement:</strong> Foster vibrant, engaged communities around common health goals.</li>
          <li><strong>Public Health:</strong> Improve public health outcomes through increased participation in health-focused activities.</li>
          <li><strong>Data and Insights:</strong> Contribute valuable data for broader public health research and initiatives.</li>
        </ul>
      </section>
    </div>
  );
}

export default Root;
