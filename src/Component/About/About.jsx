import React, { useEffect, useState } from 'react';
import './About.css';
import BASE_URL from '../../Api';
import axios from 'axios';

const About = () => {
  const [aboutContentLines, setAboutContentLines] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state to show loader

  // Fetch About Us content on component mount
  useEffect(() => {
    // Show loader for 2 seconds before fetching data
    const timer = setTimeout(() => {
      axios.get(`${BASE_URL}/admin/getAboutUs`)
        .then(response => {
          console.log('res[', response);
          if (response.status === 200 && response.data?.data[0]?.aboutUsDetail.length > 0) {
            setAboutContentLines(response.data.data[0].aboutUsDetail); // Set fetched data
          } else {
            setAboutContentLines(['No content found']); // Default message if no content exists
          }
        })
        .catch(error => {
          setAboutContentLines(['No content found']); // Default message when there's an error
          console.log('Error fetching About Us content:', error);
        })
        .finally(() => {
          setLoading(false); // Disable loader after fetching is done
        });
    }, 1000); // Delay for 2 seconds

    return () => clearTimeout(timer); // Cleanup timer if component unmounts
  }, []);

  return (
    <section id="about" className="section">
      <h2>About</h2>
      {loading ? (
        <div className="loader"></div> // Show loader while loading
      ) : (
        aboutContentLines.length > 0 ? (
          aboutContentLines.map((line, index) => (
            <p key={index}>
              {line}
            </p>
          ))
        ) : (
          <p>No content found</p> // Show if there's no content
        )
      )}
    </section>
  );
};

export default About;
