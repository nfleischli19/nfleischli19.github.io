import React, { useEffect } from 'react';
import '../../styles/AltEdit.css'; // Specific CSS file for the project
import demo from '../../images/altedit_demo.mp4'; // Image for the project
import logo from '../../images/logo/altedit_logo.png'; // Image for the project


function AltEdit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="altedit-page">
      <section className="header-section">
        <img src={logo} alt="AltEdit Logo" className='altedit-logo' />
        <h1>BLV Screenshot Redaction Tool </h1>
        <p><strong>AltEdit</strong> is a web-based tool designed for users with blindness or low vision. The project originated from the CS377Q - Design for Accessibility course taught by Adjunct Professor John Tang, a leader in accessible technologies at Microsoft Research's Ability group. Our team developed this idea through multiple rounds of needfinding and usability interviews with BLV community members, with invaluable guidance from Professor Tang. AltEdit was created in collaboration with Shina Penaranda, Cristobal Garcia, and Shreya Shubhangi. </p>
        <p><a href='https://cgarcia00.github.io/CS377Q-BLV-Screenshots/' alt='link to tool'>[AltEdit Website]</a> </p>      
      </section>
      <section className="section-overview">
        <h2>The Problem</h2>
        <p>People who are blind or have low vision have trouble trusting what is in—or absent from—images such as screenshots. There may be sensitive information they don’t want anyone seeing.</p>
      </section>

      <section className="section-solution">
        <h2>Our Solution</h2>
        <p>Alt Edit is an AI-powered web tool that allows users to understand what is in their screenshots, redact sensitive information, and remove unwanted windows present in the image.</p>
      </section>

      <section className="section-video">
            <video controls>
                <source src={demo} type="video/mp4" />
            </video>
      </section>

    </div>
  );
}

export default AltEdit;
