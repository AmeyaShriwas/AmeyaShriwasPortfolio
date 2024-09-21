import React, { useEffect, useState } from 'react';
import './About.css';
import BASE_URL from '../../Api';
import axios from 'axios';  // Ensure axios is imported

const About = () => {
  const [aboutContentLines, setAboutContentLines] = useState([]);

  // Fetch About Us content on component mount
  useEffect(() => {
    axios.get(`${BASE_URL}/admin/getAboutUs`, )
      .then(response => {
        console.log('res[', response)
        if (response.status === 200 && response.data?.data[0]?.aboutUsDetail.length > 0) {
          setAboutContentLines(response.data.data[0].aboutUsDetail); // Set the fetched data
        } else {
          setAboutContentLines(['No content found']); // Default message if no content exists
        }
      })
      .catch(error => {
        setAboutContentLines(['No content found']); // Default message when there's an error fetching data
        console.log('Error fetching About Us content:', error);
      });
  }, []);

  return (
    <section id="about" className="section">
      <h2>About</h2>
      {aboutContentLines.length > 0 ? (
        aboutContentLines.map((line, index) => (
          <p key={index}>
            {line}
          </p>
        ))
      ) : (
        <p>No content found</p> // Show if there's no content
      )}
    </section>
  );
};

export default About;
