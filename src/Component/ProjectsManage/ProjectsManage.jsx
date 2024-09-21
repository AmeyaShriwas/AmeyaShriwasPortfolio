import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './ProjectsManage.css';
import BASE_URL from '../../Api';
import { useNotification } from '../../Component/Notifiction/Notification';


const token = localStorage.getItem('token');

const ProjectManager = () => {
  const [projects, setProjects] = useState([]);
  const { showSuccess, showError } = useNotification();

  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    category: '',
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [images, setImages] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/admin/projects/getProjects`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProjects(response.data.data);
    } catch (error) {
      showError('Error fetching projects');
    }
  };

  const addProject = async () => {
    try {
      const formData = new FormData();
      images.forEach((image) => formData.append('images', image));
      formData.append('title', newProject.title);
      formData.append('description', newProject.description);
      formData.append('category', newProject.category);

      await axios.post(`${BASE_URL}/admin/projects/add`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      showSuccess('Project added successfully');
      fetchProjects();
      setNewProject({ title: '', description: '', category: '' });
      setImages([]);
    } catch (error) {
      showError('Error adding project');
    }
  };

  const editProject = async (projectId) => {
    try {
      const formData = new FormData();
      images.forEach((image) => formData.append('images', image));
      formData.append('title', newProject.title);
      formData.append('description', newProject.description);
      formData.append('category', newProject.category);

      await axios.put(`${BASE_URL}/admin/projects/edit/${projectId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      showSuccess('Project updated successfully');
      fetchProjects();
      setNewProject({ title: '', description: '', category: '' });
      setImages([]);
      setSelectedProject(null);
    } catch (error) {
      showError('Error updating project');
    }
  };

  const deleteProject = async (projectId) => {
    try {
      await axios.delete(`${BASE_URL}/admin/projects/delete/${projectId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      showSuccess('Project deleted successfully');
      fetchProjects();
    } catch (error) {
      showError('Error deleting project');
    }
  };

  const handleSelectImages = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setImages(selectedFiles);
    showSuccess(`${selectedFiles.length} image(s) selected`);
  };

  const handleImageUpload = async (projectId) => {
    if (images.length === 0) {
      showSuccess('Please select images before uploading');
      return;
    }

    try {
      const formData = new FormData();
      images.forEach((image) => formData.append('images', image));

      await axios.post(`${BASE_URL}/admin/projects/${projectId}/images`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      showSuccess('Images uploaded successfully');
      setImages([]);
      fetchProjects();
    } catch (error) {
      showError('Error uploading images');
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="project-manager">
      <h1 className="header">Portfolio Projects</h1>

      <div className="new-project-form">
        <h2>Add/Edit Project</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        />
        <select
          name="category"
          value={newProject.category}
          onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
        >
          <option value="">Select Category</option>
          <option value="html_css_js">HTML, CSS, JS</option>
          <option value="react_js">React JS</option>
          <option value="react_native">React Native</option>
          <option value="mern_stack">MERN Stack</option>
          <option value="next_js">Next.js</option>
        </select>
        <input type="file" multiple onChange={handleSelectImages} />
        <button className="add-btn" onClick={selectedProject ? () => editProject(selectedProject) : addProject}>
          {selectedProject ? '📝 Edit Project' : '➕ Add Project'}
        </button>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Category: {project.category.replace('_', ' ').toUpperCase()}</p>

            <div className="project-images">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={`${BASE_URL}/${image}`}
                  alt="Project"
                  className={`project-img ${
                    project.category === 'react_native' ? 'vertical-img' : 'horizontal-img'
                  }`}
                />
              ))}
            </div>

            <button className="edit-btn" onClick={() => {
              setSelectedProject(project._id);
              setNewProject({
                title: project.title,
                description: project.description,
                category: project.category,
              });
              setImages([]);
            }}>
              ✏️ Edit Project
            </button>

            <input
              type="file"
              id={`fileInput-${project._id}`}
              multiple
              onChange={handleSelectImages}
              style={{ display: 'none' }}
            />
            <button className="edit-btn" onClick={() => document.getElementById(`fileInput-${project._id}`).click()}>
              📂 Select Images
            </button>
            <button className="edit-btn" onClick={() => handleImageUpload(project._id)}>
              ⬆️ Upload Selected Images
            </button>

            <button className="delete-btn" onClick={() => deleteProject(project._id)}>
              🗑️ Delete Project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectManager;
