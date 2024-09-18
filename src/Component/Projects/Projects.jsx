import React, { useState, useEffect } from 'react';
import './Projects.css';
import linkedin from './../../assets/linkedin.png';
import amazon from './../../assets/amazon.png';
import Slider from './../Slider/Slider'; // Adjust the path as necessary
import m1 from './../../assets/m1.png';
import m2 from './../../assets/m2.png';
import m3 from './../../assets/m3.png';

// Sample images for projects
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
  ],
  reactNative: [
    {
      title: "Social Media App",
      description: "Developed a social media app that allows users to post updates, photos, and videos using React Native and Firebase.",
      images: [m1, m2, m3], // Multiple images for the project
    },
    {
      title: "Expense Tracker",
      description: "Created a cross-platform expense tracker app using React Native, with features like expense categories, budgeting, and analytics.",
      images: [m1, m2, m3], // Multiple images for the project
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width for responsive design
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768; // Check for screen size less than 768px

  const renderImages = (images) => {
    if (isMobile) {
      // Show only one image on mobile with slider for remaining
      return (
        <div className="slider-wrapper">
          <Slider>
            {images.map((img, index) => (
              <img key={index} src={img} alt={`Slide ${index}`} className="project-image" />
            ))}
          </Slider>
        </div>
      );
    } else {
      // Show 3 images by default and remaining in slider for larger screens
      return (
        <div>
          <div className="project-images">
            {images.slice(0, 3).map((img, index) => (
              <img key={index} src={img} alt={`Image ${index}`} className="project-imageM" />
            ))}
          </div>
          {images.length > 3 && (
            <Slider>
              {images.slice(3).map((img, index) => (
                <img key={index} src={img} alt={`Slide ${index}`} className="project-imageM" />
              ))}
            </Slider>
          )}
        </div>
      );
    }
  };

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
              {renderImages(project.images)} {/* Handle multiple images */}
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
