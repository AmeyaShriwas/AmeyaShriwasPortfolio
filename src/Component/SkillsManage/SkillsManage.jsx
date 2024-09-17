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
    // Save or process the updated skills as needed
  };

  return (
    <div className="manage-skills">
      <h1>Manage Skills</h1>

      <div className="skills-container">
        {/* Display Skills in Cards */}
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h2>Skill {index + 1}</h2>
            <div className="skill-details">
              <div className="input-group">
                {/* Skill Name */}
                <input
                  type="text"
                  placeholder={`Skill ${index + 1}`}
                  value={skill.name}
                  onChange={(e) => handleSkillChange(index, 'name', e.target.value)}
                />
                {/* Remove Skill Button */}
                <button
                  className="remove-skill"
                  onClick={() => handleRemoveSkill(index)}
                  disabled={skills.length <= 1}
                >
                  Remove
                </button>
              </div>

              {/* Skill Icon Upload */}
              <div className="upload-group">
                <label htmlFor={`upload-button-${index}`} className="upload-button">
                  Upload Icon
                </label>
                <input
                  type="file"
                  id={`upload-button-${index}`}
                  accept="image/*"
                  onChange={(e) => handleSkillChange(index, 'icon', e.target.files[0])}
                />
                {/* Display uploaded file name */}
                {skill.icon && <span>{skill.icon.name}</span>}
              </div>
            </div>
          </div>
        ))}

        {/* Button to Add More Skills */}
        <button className="add-skill" onClick={handleAddSkill}>
          Add Skill
        </button>
      </div>

      {/* Update Button */}
      <button className="update-skills" onClick={handleUpdateSkills}>
        Update Skills
      </button>

      {/* Preview Section */}
      <div className="preview-section">
        <h2>Preview of Skills</h2>
        <div className="preview-container">
          {skills.map((skill, index) => (
            <div key={index} className="preview-item">
              <span>{skill.name}</span>
              {skill.icon && <img src={URL.createObjectURL(skill.icon)} alt={skill.name} width="50" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
