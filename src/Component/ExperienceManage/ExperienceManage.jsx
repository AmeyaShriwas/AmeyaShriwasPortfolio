import React, { useState } from 'react';
import './ExperienceManage.css'; // Import custom CSS file
import { AiOutlineDelete } from 'react-icons/ai';


export default function ExperienceManage() {
  const [experiences, setExperiences] = useState([
    {
      timeline: 'January 2015 - Present',
      position: 'Senior Full Stack Developer at Tech Solutions',
      content: `I lead a team of developers to design, build, and deploy scalable web applications using the MERN stack. I’ve successfully launched multiple projects from concept to production, improving both performance and customer satisfaction.

My experience includes managing server infrastructure, including VPS hosting, optimizing for performance, security, and scalability. I've also led efforts to integrate React Native mobile apps into our technology stack.`,
    },
    {
      timeline: 'June 2012 - December 2014',
      position: 'React Native Developer at Mobile Innovations',
      content: `Developed cross-platform mobile applications using React Native. Worked on integrating features such as real-time notifications, push notifications, and seamless UI transitions for both Android and iOS platforms.

Built high-performance apps that improved the user engagement rate, and exceeded expectations by reducing app load times and increasing responsiveness. Successfully launched apps that garnered significant user downloads.`,
    },
  ]);

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
    console.log('Updated Experience Content:', experiences);
  };

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
              onClick={() => handleRemoveLine(index)}
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
