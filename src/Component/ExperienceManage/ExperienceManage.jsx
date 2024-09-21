import React, { useState } from 'react';
import './ExperienceManage.css'; // Import custom CSS file
import { AiOutlineDelete } from 'react-icons/ai';
import axios from 'axios';
import BASE_URL from '../../Api';

import { useEffect } from 'react';
import { useNotification } from '../../Component/Notifiction/Notification';



export default function ExperienceManage() {
  const [experiences, setExperiences] = useState([]);
  const { showSuccess, showError } = useNotification();


  const handleExperienceChange = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index] = { ...updatedExperiences[index], [field]: value };
    setExperiences(updatedExperiences);
  };

  const handleAddExperience = () => {
    setExperiences([...experiences, { timeline: '', position: '', content: '' }]);
  };

  const handleRemoveExperience = (index) => {
    if (experiences.length > 1) {
      const updatedExperiences = experiences.filter((_, i) => i !== index);
      setExperiences(updatedExperiences);
    }
  };

  const handleUpdateContent = () => {
    const token = localStorage.getItem('token'); // Get the token from local storage

    axios.post(`${BASE_URL}/admin/addExperience`, {ExperienceDetail: experiences}, {
      headers: {
        Authorization: `Bearer ${token}`, // Send token in Authorization header
      },
    })
    .then(response => {
      console.log('res sta',response.status)
      if (response.status === 200) {
        showSuccess('Experience content updated successfully');
        console.log('Experience content updated successfully.');
      }
    })
    .catch(error => {
      showError('Error updating Experience content');
      console.log('Error updating Experience content:', error);
    });
    console.log('Updated Experience Content:', experiences);
  };


  // Fetch About Us content on component mount
  useEffect(() => {
    const token = localStorage.getItem('token'); // Get the token from local storage
    axios.get(`${BASE_URL}/admin/getExperience`, {
      headers: {
        Authorization: `Bearer ${token}`, // Send token in Authorization header
      },
    })
    .then(response => {
      if (response.status === 200 && response.data?.data[0]?.ExperienceDetail.length > 0) {
        setExperiences(response.data.data[0].ExperienceDetail); // Set the fetched data
      } else {
        
      }
    })
    .catch(error => {
      setExperiences(['No content yet']); // Default message when there's an error fetching data
      console.log('Error fetching About Us content:', error);
    });
  }, []);

  return (
    <div className="experience-manage-container">
      <h1 className="title">Manage Experience</h1>

      <div className="experience-form">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <input
                type="text"
                placeholder={`Timeline ${index + 1}`}
                value={exp.timeline}
                onChange={(e) => handleExperienceChange(index, 'timeline', e.target.value)}
                className="input-field"
              />
                 <AiOutlineDelete
              className="delete-icon"
              onClick={() => handleRemoveExperience(index)}
              style={{ cursor: 'pointer', color: 'red', marginLeft: '8px' }}
            />
            </div>
            <input
              type="text"
              placeholder={`Position ${index + 1}`}
              value={exp.position}
              onChange={(e) => handleExperienceChange(index, 'position', e.target.value)}
              className="input-field"
            />
            <textarea
              placeholder={`Content ${index + 1}`}
              value={exp.content}
              onChange={(e) => handleExperienceChange(index, 'content', e.target.value)}
              className="textarea-field"
            />
            {index < experiences.length - 1 && <hr className="divider" />}
          </div>
        ))}

        <button className="add-button" onClick={handleAddExperience}>
          Add Experience
        </button>
      </div>

      <button className="update-button" onClick={handleUpdateContent}>
        Update Content
      </button>

      <div className="preview-section">
        <h2 className="preview-title">Preview of Experience</h2>
        <div className="experience-preview">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-preview-item">
              <h3 className="position-preview">{exp.position}</h3>
              <p className="timeline-preview">{exp.timeline}</p>
              <p className="content-preview">{exp.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
