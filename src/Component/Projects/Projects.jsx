import React, { useState, useEffect } from 'react';
import './Projects.css';
import Slider from './../Slider/Slider'; // Adjust the path as necessary
import axios from 'axios';
import BASE_URL from '../../Api'; // Ensure the BASE_URL import is correct

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update window width for responsive design
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/admin/projects/getProjects`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.data.success) {
        setProjectsData(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  useEffect(() => {
    fetchProjects(); // Call the function to fetch projects when component mounts
  }, []);

  const isMobile = windowWidth < 768; // Check for screen size less than 768px

  const renderImages = (images) => {
    if (isMobile) {
      // Show only one image on mobile with slider for remaining
      return (
        <div className="slider-wrapper">
          <Slider>
            {images.map((img, index) => (
              <img key={index} src={`${BASE_URL}/${img}`} alt={`Slide ${index}`} className="project-image" />
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
              <img key={index} src={`${BASE_URL}/${img}`} alt={`Image ${index}`} className="project-imageM" />
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
        <div className="project-grid">
          {projectsData.map((project) => (
            <div className="project" key={project._id}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              {renderImages(project.images)} {/* Handle multiple images */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
