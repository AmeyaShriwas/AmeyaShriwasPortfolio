import React, { useState } from 'react';
import Profile from '../Profile/Profile';
import SocialIcons from '../SocialIcons/SocialIcons';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import './PortfolioContainer.css';

const PortfolioContainer = () => {
    const [activeTab, setActiveTab] = useState('about');

    const renderSection = () => {
        switch (activeTab) {
            case 'about':
                return <About />;
            case 'experience':
                return <Experience />;
            case 'projects':
                return <Projects />;
            case 'skills':
                return <Skills />;
            default:
                return <About />;
        }
    };

    return (
        <div className="portfolio-container">
            <div className="portfolio-left">
                <Profile />
                <SocialIcons />
            </div>
            <div className="portfolio-right">
                <div className="tabsMain">
                    {['about', 'experience', 'projects', 'skills'].map(tab => (
                        <button
                            key={tab}
                            className={`tab ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>
                <div className="tab-content">
                    {renderSection()}
                </div>
            </div>
        </div>
    );
};

export default PortfolioContainer;
