import React, { useState } from 'react';
import './Dashboard.css';
import ManageAboutUs from '../../Component/ManageAboutUs/ManageAboutUs';
import ProjectsManage from '../../Component/ProjectsManage/ProjectsManage';
import ExperienceManage from '../../Component/ExperienceManage/ExperienceManage';
import ManageSkills from '../../Component/SkillsManage/SkillsManage';
import { useNavigate } from 'react-router-dom';

const NAVIGATION = [
  { segment: 'about', title: 'About Us', icon: '🏢' },
  { segment: 'experience', title: 'Experience', icon: '💼' },
  { segment: 'projects', title: 'Projects', icon: '📁' },
  { segment: 'skills', title: 'Skills', icon: '🧠' },
];

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

function DashboardTabs() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

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

function TopRightBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // Redirect to login page on logout
  };

  return (
    <div className="top-right-bar">
        <button className="logout-button" onClick={handleLogout}>
      Ameya Shriwas
      </button>
      <div className='logoutButtonContainer'>
      <div className="blinking-icon"></div>

      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="dashboard">
      <TopRightBar />
      <div className="main-content">
        <DashboardTabs />
      </div>
    </div>
  );
}
