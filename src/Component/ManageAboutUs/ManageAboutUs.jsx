import React, { useState } from 'react';
import './ManageAboutUs.css';
import { AiOutlineDelete } from 'react-icons/ai';

export default function ManageAboutUs() {
  const [aboutContentLines, setAboutContentLines] = useState([
    'Welcome to our company!',
    'We provide exceptional services.',
    'Our team is dedicated and experienced.',
    'Contact us for more information.'
  ]);

  const handleLineChange = (index, value) => {
    const updatedContent = [...aboutContentLines];
    updatedContent[index] = value;
    setAboutContentLines(updatedContent);
  };

  const handleAddLine = () => {
    setAboutContentLines([...aboutContentLines, '']);
  };

  const handleRemoveLine = (index) => {
    if (aboutContentLines.length > 1) {
      const updatedContent = aboutContentLines.filter((_, i) => i !== index);
      setAboutContentLines(updatedContent);
    }
  };

  const handleUpdateContent = () => {
    console.log('Updated About Us Content:', aboutContentLines);
  };

  return (
    <div className="manage-about-us">
      <h1>Manage About Us Content</h1>

      <div className="content-container">
        {aboutContentLines.map((line, index) => (
          <div key={index} className="content-line">
            <input
              type="text"
              placeholder={`Content Line ${index + 1}`}
              value={line}
              onChange={(e) => handleLineChange(index, e.target.value)}
              className="text-field"
            />
            <AiOutlineDelete
              className="delete-icon"
              onClick={() => handleRemoveLine(index)}
              style={{ cursor: 'pointer', color: 'red', marginLeft: '8px' }}
            />
          </div>
        ))}

        <button className="add-button" onClick={handleAddLine}>
          Add More
        </button>

        <hr className="divider" />

        <button className="update-button" onClick={handleUpdateContent}>
          Update Content
        </button>
      </div>

      <div className="preview-section">
        <h2>Preview of About Us</h2>
        <div className="preview-container">
          {aboutContentLines.map((line, index) => (
            <p key={index} className="preview-line">
              {line || `Line ${index + 1} is empty.`}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
