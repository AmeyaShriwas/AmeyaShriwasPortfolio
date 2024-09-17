import React, { useState } from 'react';
import './ProjectsManage.css';

export default function ProjectsManage() {
  // State to manage projects in different categories
  const [projects, setProjects] = useState({
    htmlCssJs: [
      {
        title: 'Personal Portfolio Website',
        description: 'Developed a personal portfolio using HTML, CSS, and JavaScript.',
        images: []
      }
    ],
    react: [
      {
        title: 'E-Commerce Platform',
        description: 'Developed an e-commerce platform using React.',
        images: []
      }
    ],
    reactNative: [
      {
        title: 'Social Media App',
        description: 'Developed a social media app using React Native and Firebase.',
        images: []
      }
    ]
  });

  const [newCategory, setNewCategory] = useState('');

  // Handle changes in project fields
  const handleProjectChange = (category, index, field, value) => {
    const updatedProjects = { ...projects };
    updatedProjects[category][index] = { ...updatedProjects[category][index], [field]: value };
    setProjects(updatedProjects);
  };

  // Add a new project to a specific category
  const handleAddProject = (category) => {
    const updatedProjects = { ...projects };
    updatedProjects[category].push({ title: '', description: '', images: [] });
    setProjects(updatedProjects);
  };

  // Remove a project from a specific category
  const handleRemoveProject = (category, index) => {
    const updatedProjects = { ...projects };
    if (updatedProjects[category].length > 1) {
      updatedProjects[category] = updatedProjects[category].filter((_, i) => i !== index);
      setProjects(updatedProjects);
    }
  };

  // Handle image uploads
  const handleImageUpload = (category, index, event) => {
    const files = Array.from(event.target.files);
    const updatedProjects = { ...projects };
    const newImages = files.map(file => URL.createObjectURL(file));
    updatedProjects[category][index].images = [...updatedProjects[category][index].images, ...newImages];
    setProjects(updatedProjects);
  };

  // Update projects data (for saving to a database or processing)
  const handleUpdateContent = () => {
    console.log('Updated Projects Content:', projects);
  };

  // Add a new category for projects
  const handleAddCategory = () => {
    if (newCategory && !projects[newCategory]) {
      setProjects({ ...projects, [newCategory]: [] });
      setNewCategory('');
    }
  };

  return (
    <div className="projects-manage">
      <h1>Manage Projects</h1>

      {/* Add New Category */}
      <div className="add-category">
        <input
          type="text"
          placeholder="New Category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button onClick={handleAddCategory}>Add Category</button>
      </div>

      {/* Loop through categories and projects */}
      {Object.keys(projects).map((category) => (
        <div key={category} className="category-card">
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>

          {/* List of projects under each category */}
          {projects[category].map((project, index) => (
            <div key={index} className="project-card">
              <h3>Project {index + 1}</h3>
              <div className="project-details">
                <input
                  type="text"
                  placeholder={`Project Title ${index + 1}`}
                  value={project.title}
                  onChange={(e) => handleProjectChange(category, index, 'title', e.target.value)}
                />
                <textarea
                  placeholder={`Description ${index + 1}`}
                  value={project.description}
                  onChange={(e) => handleProjectChange(category, index, 'description', e.target.value)}
                />
                
                {/* Image Upload Section */}
                <div className="image-upload">
                  <input
                    type="file"
                    multiple
                    id={`upload-button-${category}-${index}`}
                    onChange={(e) => handleImageUpload(category, index, e)}
                  />
                  <label htmlFor={`upload-button-${category}-${index}`}>
                    <button>Upload Images</button>
                  </label>
                  <button
                    className="remove-project"
                    onClick={() => handleRemoveProject(category, index)}
                    disabled={projects[category].length <= 1}
                  >
                    Remove Project
                  </button>
                </div>

                {/* Display uploaded images */}
                <div className="image-gallery">
                  {project.images.map((img, imgIndex) => (
                    <div key={imgIndex} className="image-item">
                      <img
                        src={img}
                        alt={`Project ${index} - Image ${imgIndex}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Button to add a new project */}
          <button
            className="add-project"
            onClick={() => handleAddProject(category)}
          >
            Add Project
          </button>
        </div>
      ))}

      {/* Button to update all project content */}
      <button
        className="update-content"
        onClick={handleUpdateContent}
      >
        Update Content
      </button>

      {/* Preview Section */}
      <div className="preview-section">
        <h2>Preview of Projects</h2>
        {Object.keys(projects).map((category) => (
          <div key={category} className="preview-category">
            <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            {projects[category].map((project, index) => (
              <div key={index} className="preview-project">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="preview-images">
                  {project.images.map((img, imgIndex) => (
                    <div key={imgIndex} className="preview-image-item">
                      <img
                        src={img}
                        alt={`Project ${index} - Image ${imgIndex}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
