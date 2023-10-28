import React from "react";
import { App.tsx } from "react-router-dom";

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <header>
        <h1>About Our Mission</h1>
        <p>
          At Tutoring Services, our primary goal is to Empower Rural Education. We are committed to supporting countryside schools and inspiring the next generation of learners. We strive to provide educational resources and opportunities to students in remote areas, ensuring they have access to quality education and a bright future.
        </p>
      </header>
      <section>
        <h2>Our Team</h2>
        <ul>
          <li>Team Member 1</li>
          <li>Team Member 2</li>
          <li>Team Member 3</li>
        </ul>
      </section>

      <section>
        <h2>Our Commitment</h2>
        <p>
          Tutoring Services is committed to bridging the educational gap by providing personalized learning experiences, mentorship, and resources to rural communities. We believe that every student, regardless of their geographical location, deserves a chance to access high-quality education.
        </p>
      </section>

      <section>
        <h2>Our Vision</h2>
        <p>
          Our vision is to create a world where every student in rural areas has the tools, knowledge, and inspiration to succeed. We aim to build a brighter future by fostering a love for learning, encouraging creativity, and empowering students to reach their full potential.
        </p>
      </section>
    </div>
  );
};

export default About;
