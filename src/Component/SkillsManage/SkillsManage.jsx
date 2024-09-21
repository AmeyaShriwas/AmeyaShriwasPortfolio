import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SkillsManage.css';
import BASE_URL from '../../Api';

import { useNotification } from '../../Component/Notifiction/Notification';


export default function ManageSkills() {
  const [skills, setSkills] = useState([]); // Start with an empty array
  const { showSuccess, showError } = useNotification();


  // Fetch skills from the API on component mount
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

        // Set skills data from the response
        console.log('skill get', response?.data?.data[0].skillsDetail)
        setSkills(response?.data?.data[0].skillsDetail || []);  // Ensure it falls back to an empty array if no data
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchSkills(); // Call the function to fetch skills when component mounts
  }, []); // Empty dependency array to run useEffect only once on mount

  // Handle skill name change
  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  // Handle adding a new skill
  const handleAddSkill = () => {
    setSkills([...skills, '']);
  };

  // Handle removing a skill
  const handleRemoveSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  // Handle API call to update skills
  const handleUpdateSkills = async () => {
    try {
      // Get token from localStorage
      const token = localStorage.getItem('token');

      // Make the API request to update skills
      const response = await axios.post(
        `${BASE_URL}/admin/skills/add`,
        { skillsDetail: skills },  // Sending skills as an array of strings
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      // Handle success
      showSuccess('Skills added successfully');
      console.log('Skills updated successfully:', response.data);
    } catch (error) {
      // Handle errors
      showError('Error updating skills:', error);
    }
  };

  return (
    <div className="manage-skills">
      <h1>Skills Manager</h1>

      <div className="skills-container">
        {/* Display Skills */}
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <input
              type="text"
              placeholder={`Skill ${index + 1}`}
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
              className="skill-input"
            />
            <button
              className="remove-btn"
              onClick={() => handleRemoveSkill(index)}
              disabled={skills.length <= 1}
            >
              ✖
            </button>
          </div>
        ))}
        <div className='skillbuttoncontainer'>
          <button className="update-btn" onClick={handleAddSkill}>
            + Add Skill
          </button>

          <button className="update-btn" onClick={handleUpdateSkills}>
            Update Skills
          </button>
        </div>
      </div>

      <div className="preview-section">
        <h2>Preview</h2>
        <div className="preview-container">
          {skills.map((skill, index) => (
            <div key={index} className="preview-item">
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
