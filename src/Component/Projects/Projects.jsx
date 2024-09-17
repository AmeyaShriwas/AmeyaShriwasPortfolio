import React from 'react';
import './Projects.css';
import linkedin from './../../assets/linkedin.png';
import amazon from './../../assets/amazon.png';
import Slider from './../Slider/Slider'; // Adjust the path as necessary

const projectsData = {
  htmlCssJs: [
    {
      title: "Personal Portfolio Website",
      description: "Developed a personal portfolio using HTML, CSS, and JavaScript. It features responsive design and interactive components.",
      image: linkedin,
    },
    {
      title: "Weather Application",
      description: "Built a weather application that fetches data from an API and displays real-time weather information using vanilla JavaScript.",
      image: amazon,
    },
    {
        title: "Personal Portfolio Website",
        description: "Developed a personal portfolio using HTML, CSS, and JavaScript. It features responsive design and interactive components.",
        image: linkedin,
      },
      {
        title: "Weather Application",
        description: "Built a weather application that fetches data from an API and displays real-time weather information using vanilla JavaScript.",
        image: amazon,
      },
  ],
  react: [
    {
      title: "E-Commerce Platform",
      description: "Developed an e-commerce platform using React, with features like product browsing, cart management, and payment gateway integration.",
      image: linkedin,
    },
    {
      title: "Task Management App",
      description: "Built a task management app using React, allowing users to add, edit, delete, and track tasks with a user-friendly interface.",
      image: amazon,
    },
    // Add more React projects here
    {
      title: "Project 3",
      description: "Description for Project 3.",
      image: linkedin,
    },
    {
      title: "Project 4",
      description: "Description for Project 4.",
      image: amazon,
    },
  ],
  reactNative: [
    {
      title: "Social Media App",
      description: "Developed a social media app that allows users to post updates, photos, and videos using React Native and Firebase.",
      image: linkedin,
    },
    {
      title: "Expense Tracker",
      description: "Created a cross-platform expense tracker app using React Native, with features like expense categories, budgeting, and analytics.",
      image: amazon,
    },
  ],
  mern: [
    {
      title: "Corporate Website",
      description: "Developed a corporate website using the MERN stack, featuring SEO optimization, fast load times, and a CMS for content management.",
      image: linkedin,
    },
    {
      title: "Real-Time Chat Application",
      description: "Built a real-time chat application with MERN Stack and Socket.io, featuring private messaging, online status indicators, and message history.",
      image: amazon,
    },
  ],
};

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      
      <div className="project-category">
        <h3>HTML, CSS, JavaScript Projects</h3>
        <div className="project-grid">
          {projectsData.htmlCssJs.map((project, index) => (
            <div className="project" key={index}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
          ))}
        </div>
      </div>

      <div className="project-category">
        <h3>React Projects</h3>
        <Slider>
          {projectsData.react.map((project, index) => (
            <div className="project slider-item" key={index}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
          ))}
        </Slider>
      </div>

      <div className="project-category">
        <h3>React Native Projects</h3>
        <div className="project-grid">
          {projectsData.reactNative.map((project, index) => (
            <div className="project" key={index}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
          ))}
        </div>
      </div>

      <div className="project-category">
        <h3>MERN Stack Projects</h3>
        <div className="project-grid">
          {projectsData.mern.map((project, index) => (
            <div className="project" key={index}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
