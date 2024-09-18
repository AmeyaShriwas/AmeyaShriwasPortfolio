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
        <a href="https://www.linkedin.com/in/ameya-shriwas-aab7b8248/" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
          <FaLinkedin />
        </a>
        <a href="https://github.com/AmeyaShriwas" target="_blank" rel="noopener noreferrer" className="social-icon github">
          <FaGithub />
        </a>
        <a href="https://x.com/ShriwasAmeya" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
          <FaTwitter />
        </a>
      </div>
      <a href="https://drive.google.com/file/d/1E8rWjATajhd_gV01Z-M2ht-TBM-HfMSN/view?usp=sharing" target="_blank" className="download-cv-button">Download CV</a>

      <Drawer/>
    </div>
  );
};

export default Profile;
