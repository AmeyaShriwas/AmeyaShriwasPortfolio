import React, { useState } from 'react';
import './SkillsManage.css';

export default function ManageSkills() {
  // State to hold the list of skills
  const [skills, setSkills] = useState([
    { name: 'React', icon: null },
    { name: 'Node.js', icon: null },
  ]);

  // Handle skill name and icon change
  const handleSkillChange = (index, field, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = { ...updatedSkills[index], [field]: value };
    setSkills(updatedSkills);
  };

  // Handle adding a new skill
  const handleAddSkill = () => {
    setSkills([...skills, { name: '', icon: null }]);
  };

  // Handle removing a skill
  const handleRemoveSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  // Handle the update (e.g., saving to a database or performing other actions)
  const handleUpdateSkills = () => {
    console.log('Updated Skills:', skills);
  };

  return (
    <div className="manage-skills">
      <h1>Skills Manager</h1>

      <div className="skills-container">
        {/* Display Skills */}
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-details">
              <input
                type="text"
                placeholder={`Skill ${index + 1}`}
                value={skill.name}
                onChange={(e) => handleSkillChange(index, 'name', e.target.value)}
                className="skill-input"
              />

              <label htmlFor={`icon-upload-${index}`} className="upload-label">
                <span className="upload-icon">📁</span> 
              </label>
              <input
                type="file"
                id={`icon-upload-${index}`}
                accept="image/*"
                onChange={(e) => handleSkillChange(index, 'icon', e.target.files[0])}
              />
              {skill.icon && <span className="icon-name">{skill.icon.name}</span>}
            </div>

            <button className="remove-btn" onClick={() => handleRemoveSkill(index)} disabled={skills.length <= 1}>
              ✖
            </button>
          </div>
        ))}
        <button className="add-btn" onClick={handleAddSkill}>
          + Add Skill
        </button>
      </div>

      <button className="update-btn" onClick={handleUpdateSkills}>
        Update Skills
      </button>

      <div className="preview-section">
        <h2>Preview</h2>
        <div className="preview-container">
          {skills.map((skill, index) => (
            <div key={index} className="preview-item">
              <span>{skill.name}</span>
              {skill.icon && <img src={URL.createObjectURL(skill.icon)} alt={skill.name} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
