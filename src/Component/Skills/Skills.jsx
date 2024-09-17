// Skills.jsx
import React from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaServer } from 'react-icons/fa';
// import { SiMongodb, SiMysql, SiNextdotjs, SiBootstrap, SiTailwindcss, SiMaterialui } from 'react-icons/si';
import { FaGoogle } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill"><FaHtml5 className="skill-icon" /><h4>HTML5</h4></div>
        <div className="skill"><FaCss3Alt className="skill-icon" /><h4>CSS3</h4></div>
        <div className="skill"><FaJs className="skill-icon" /><h4>JavaScript</h4></div>
        <div className="skill"><FaReact className="skill-icon" /><h4>React</h4></div>
        <div className="skill"><FaReact className="skill-icon" /><h4>React Native</h4></div>
        <div className="skill"><FaNodeJs className="skill-icon" /><h4>Node.js</h4></div>
        <div className="skill"><FaNodeJs className="skill-icon" /><h4>Express.js</h4></div>
        {/* <div className="skill"><SiMongodb className="skill-icon" /><h4>MongoDB</h4></div>
        <div className="skill"><SiMysql className="skill-icon" /><h4>MySQL</h4></div>
        <div className="skill"><FaServer className="skill-icon" /><h4>VPS</h4></div>
        <div className="skill"><FaGoogle className="skill-icon" /><h4>SEO</h4></div>
        <div className="skill"><SiNextdotjs className="skill-icon" /><h4>Next.js</h4></div>
        <div className="skill"><SiBootstrap className="skill-icon" /><h4>Bootstrap</h4></div>
        <div className="skill"><SiTailwindcss className="skill-icon" /><h4>Tailwind CSS</h4></div>
        <div className="skill"><SiMaterialui className="skill-icon" /><h4>Material UI</h4></div> */}
      </div>
    </section>
  );
};

export default Skills;
