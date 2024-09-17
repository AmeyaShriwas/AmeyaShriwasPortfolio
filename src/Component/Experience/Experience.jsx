// Experience.jsx
import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <div className="experience">
        <h3>Senior Full Stack Developer at Tech Solutions</h3>
        <p>January 2015 - Present</p>
        <p>
          I lead a team of developers to design, build, and deploy scalable web applications using the MERN stack. I’ve 
          successfully launched multiple projects from concept to production, improving both performance and customer 
          satisfaction.
        </p>
        <p>
          My experience includes managing server infrastructure, including VPS hosting, optimizing for performance, 
          security, and scalability. I've also led efforts to integrate React Native mobile apps into our technology stack.
        </p>
      </div>
      <div className="experience">
        <h3>React Native Developer at Mobile Innovations</h3>
        <p>June 2012 - December 2014</p>
        <p>
          Developed cross-platform mobile applications using React Native. Worked on integrating features such as 
          real-time notifications, push notifications, and seamless UI transitions for both Android and iOS platforms.
        </p>
        <p>
          Built high-performance apps that improved the user engagement rate, and exceeded expectations by reducing 
          app load times and increasing responsiveness. Successfully launched apps that garnered significant user downloads.
        </p>
      </div>
    </section>
  );
};

export default Experience;
