import React from 'react';
import './SocialIcons.css'

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
