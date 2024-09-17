import React from 'react';
import logo from '../../assets/portfolio.png';
import './Profile.css';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import Drawer from '../Sidebar/Sidebar';

const Profile = () => {
  return (
    <div className="profile-container">
      <img src={logo} alt="Developer" className="profile-image" />
      <h1 className="name-animation">Ameya Shriwas</h1>
      <div className="subtitle">MERN Stack Developer</div>
      <div className="contact-info">
        <p><FaPhone /> 7354820386</p>
        <p><FaEnvelope /> ameyashriwas133@example.com</p>
      </div>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
          <FaLinkedin />
        </a>
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="social-icon github">
          <FaGithub />
        </a>
        <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
          <FaTwitter />
        </a>
      </div>
      <a href="/path/to/your/cv.pdf" download className="download-cv-button">Download CV</a>
      <Drawer/>
    </div>
  );
};

export default Profile;
