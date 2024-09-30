import React, { useState, useEffect } from 'react';
import './Skills.css';
import axios from 'axios';
import BASE_URL from '../../Api'; // Ensure BASE_URL is properly set

const Skills = () => {
  const [skills, setSkills] = useState([]); // Start with an empty array
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        // Get token from localStorage
        const token = localStorage.getItem('token');

        // Fetch skills data from the API
        const response = await axios.get(`${BASE_URL}/admin/skills/getSkills`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        // Log and set the skills data from the response
        console.log('Skill fetched:', response?.data?.data[0].skillsDetail);
        setSkills(response?.data?.data[0].skillsDetail || []); // Fallback to an empty array if no data

        // Simulate a 2-second delay for the loader
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching skills:', error);
        setLoading(false); // Stop loading even if there's an error
      }
    };

    fetchSkills(); // Call the function to fetch skills when component mounts
  }, []); // Empty dependency array to run useEffect only once on mount

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      {loading ? (
        // Display a loader while loading is true
        <div className="loader"></div>
      ) : (
        <div className="skills-containerMain">
          {/* Map through the skills and render them */}
          {skills?.map((skill, index) => (
            <div key={index} className="skill">
              <h4>{skill}</h4>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Skills;
