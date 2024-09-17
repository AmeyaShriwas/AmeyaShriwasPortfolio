import React, { useState } from 'react';
import './Dashboard.css'; // Custom CSS file for styles
// import { useNavigate } from 'react-router-dom'; // For logout navigation
import ManageAboutUs from '../../Component/ManageAboutUs/ManageAboutUs';
import ProjectsManage from '../../Component/ProjectsManage/ProjectsManage';
import ExperienceManage from '../../Component/ExperienceManage/ExperienceManage';
import ManageSkills from '../../Component/SkillsManage/SkillsManage';
import { useNavigate } from 'react-router-dom';

// Define custom navigation structure
const NAVIGATION = [
  { segment: 'about', title: 'About Us', icon: '🏢' },
  { segment: 'experience', title: 'Experience', icon: '💼' },
  { segment: 'projects', title: 'Projects', icon: '📁' },
  { segment: 'skills', title: 'Skills', icon: '🧠' },
];

// Tab Panel Component
function TabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <div className="tab-panel-content">{children}</div>}
    </div>
  );
}

// Dashboard Tabs Component
function DashboardTabs() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate()

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className="dashboard-tabs">
      <div className="tabs">
        {NAVIGATION.map((nav, index) => (
          <button
            key={index}
            className={`tab ${value === index ? 'active' : ''}`}
            onClick={() => handleChange(index)}
          >
            {nav.icon} {nav.title}
          </button>
        ))}
      </div>
      <TabPanel value={value} index={0}>
        <ManageAboutUs />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ExperienceManage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProjectsManage />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ManageSkills />
      </TabPanel>
    </div>
  );
}

// Top-right Bar Component
function TopRightBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // Redirect to login page on logout
  };

  return (
    <div className="top-right-bar">
      <div className="blinking-icon"></div>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

// Dashboard Component
export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="main-content">
        <TopRightBar />
        <DashboardTabs />
      </div>
    </div>
  );
}

// Dummy components for demonstration
function ManageAboutUsFun() {
  return <div>Manage About Us</div>;
}

function ExperienceManageFun() {
  return <div>Experience Manage</div>;
}

function ProjectsManageFun() {
  return <div>Projects Manage</div>;
}

function ManageSkillsFun() {
  return <div>Manage Skills</div>;
}
