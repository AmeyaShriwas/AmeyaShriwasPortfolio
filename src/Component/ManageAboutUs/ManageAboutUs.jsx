import React, { useEffect, useState } from 'react';
import './ManageAboutUs.css';
import { AiOutlineDelete } from 'react-icons/ai';
import axios from 'axios';
import BASE_URL from '../../Api';

import { useNotification } from '../../Component/Notifiction/Notification';


export default function ManageAboutUs() {
  const [aboutContentLines, setAboutContentLines] = useState([]);
  const { showSuccess, showError } = useNotification();


  // Handling the line input changes
  const handleLineChange = (index, value) => {
    const updatedContent = [...aboutContentLines];
    updatedContent[index] = value;
    setAboutContentLines(updatedContent);
  };

  // Add new line for more content
  const handleAddLine = () => {
    setAboutContentLines([...aboutContentLines, '']);
  };

  // Remove a line from the content
  const handleRemoveLine = (index) => {
    if (aboutContentLines.length > 1) {
      const updatedContent = aboutContentLines.filter((_, i) => i !== index);
      setAboutContentLines(updatedContent);
    }
  };

  // Update About Us content
  const handleUpdateContent = () => {
    const token = localStorage.getItem('token'); // Get the token from local storage
    console.log('content', aboutContentLines)
    axios.post(
      `${BASE_URL}/admin/addAboutUs`, 
      { aboutUsDetail: aboutContentLines }, // Assuming you're sending this data structure
      {
        headers: {
          Authorization: `Bearer ${token}`, // Send token in Authorization header
        },
      }
    )
    .then(response => {
      console.log('res sta',response.status)
      if (response.status === 200) {
        showSuccess('About Us content updated successfully');
        console.log('About Us content updated successfully.');
      }
    })
    .catch(error => {
      showError('Error updating About Us content');
      console.log('Error updating About Us content:', error);
    });
  };

  // Fetch About Us content on component mount
  useEffect(() => {
    const token = localStorage.getItem('token'); // Get the token from local storage
    axios.get(`${BASE_URL}/admin/getAboutUs`, {
      headers: {
        Authorization: `Bearer ${token}`, // Send token in Authorization header
      },
    })
    .then(response => {
      if (response.status === 200 && response.data?.data[0]?.aboutUsDetail.length > 0) {
        setAboutContentLines(response.data.data[0].aboutUsDetail); // Set the fetched data
      } else {
        
      }
    })
    .catch(error => {
      setAboutContentLines(['No content yet']); // Default message when there's an error fetching data
      console.log('Error fetching About Us content:', error);
    });
  }, []);

  return (
    <div className="manage-about-us">
      <h1>Manage About Us Content</h1>

      <div className="content-container">
        {aboutContentLines?.map((line, index) => (
          <div key={index} className="content-line">
            <input
              type="text"
              placeholder={`Content Line ${index + 1}`}
              value={line}
              onChange={(e) => handleLineChange(index, e.target.value)}
              className="text-field"
              disabled={line === 'No content yet'} // Disable editing if no content yet
            />
            {aboutContentLines.length > 1 && (
              <AiOutlineDelete
                className="delete-icon"
                onClick={() => handleRemoveLine(index)}
                style={{ cursor: 'pointer', color: 'red', marginLeft: '8px' }}
              />
            )}
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
