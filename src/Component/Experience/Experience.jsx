import React, { useEffect, useState } from 'react';
import './Experience.css';
import BASE_URL from '../../Api';
import axios from 'axios';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch experience content on component mount
  useEffect(() => {
    const token = localStorage.getItem('token'); // Get the token from local storage
    // Set a delay of 2 seconds before fetching the data
    const timer = setTimeout(() => {
      axios.get(`${BASE_URL}/admin/getExperience`, {
        headers: {
          Authorization: `Bearer ${token}`, // Send token in Authorization header
        },
      })
        .then(response => {
          if (response.status === 200 && response.data?.data[0]?.ExperienceDetail.length > 0) {
            setExperiences(response.data.data[0].ExperienceDetail); // Set the fetched data
          } else {
            setExperiences([]); // Default when no content
          }
        })
        .catch(error => {
          setExperiences([]); // Default message when there's an error fetching data
          console.log('Error fetching experience content:', error);
        })
        .finally(() => {
          setLoading(false); // Hide the loader after data is fetched
        });
    }, 1000); // 2-second delay to show loader

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      {loading ? (
        <div className="loader"></div> // Show loader while data is being fetched
      ) : (
        experiences.length > 0 ? (
          experiences.map((experience, index) => (
            <div key={index} className="experience">
              <h3>{experience.position}</h3>
              <p>{experience.timeline}</p>
              <p>{experience.content}</p>
            </div>
          ))
        ) : (
          <p>No content found</p>
        )
      )}
    </section>
  );
};

export default Experience;
