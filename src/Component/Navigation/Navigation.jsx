import React from 'react';
import './Navigation.css'

const Navigation = ({ activeSection, scrollToSection }) => {
  return (
    <nav>
      <a
        href="#about"
        className={activeSection === 'about' ? 'active' : ''}
        onClick={() => scrollToSection('about')}
      >
        About
      </a>
      <a
        href="#experience"
        className={activeSection === 'experience' ? 'active' : ''}
        onClick={() => scrollToSection('experience')}
      >
        Experience
      </a>
      <a
        href="#projects"
        className={activeSection === 'projects' ? 'active' : ''}
        onClick={() => scrollToSection('projects')}
      >
        Projects
      </a>
      <a
        href="#skills"
        className={activeSection === 'skills' ? 'active' : ''}
        onClick={() => scrollToSection('skills')}
      >
        Skills
      </a>
    </nav>
  );
};

export default Navigation;
