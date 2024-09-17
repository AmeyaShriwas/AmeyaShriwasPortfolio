import React, { useEffect, useState, useRef } from 'react';
import './Portfolio.css';
import logo from './../assets/portfolio.png';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const sectionRefs = {
    about: useRef(null),
    experience: useRef(null),
    projects: useRef(null),
    skills: useRef(null)
  };

  // Function to handle scrolling and update active section
  const handleScroll = () => {
    const scrollPosition = window.scrollY + 200; // Adjust offset as needed
    for (const [key, ref] of Object.entries(sectionRefs)) {
      if (ref.current && ref.current.offsetTop <= scrollPosition) {
        setActiveSection(key);
      }
    }
  };

  // Effect to add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to a section
  const scrollToSection = (section) => {
    const sectionRef = sectionRefs[section];
    if (sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop - 100, // Adjust offset as needed
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="portfolio-container">
      <div className="portfolio-left">
        <img src={logo} alt="Developer" className="profile-image" />
        <h1 className="name-animation">Ameya Shriwas</h1>
        <div className="subtitle">MERN Stack Developer</div>
        <div className="contact-info">
          <p>
            <i className="fa fa-phone"></i> 7354820386
          </p>
          <p>
            <i className="fa fa-envelope"></i> ameyashriwas133@example.com
          </p>
        </div>
        <nav>
          <a
            href="#about"
            className={activeSection === 'about' ? 'active' : ''}
            onClick={() => scrollToSection('about')}
          >
            About
          </a>
          <a
            href="#experience"
            className={activeSection === 'experience' ? 'active' : ''}
            onClick={() => scrollToSection('experience')}
          >
            Experience
          </a>
          <a
            href="#projects"
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </a>
          <a
            href="#skills"
            className={activeSection === 'skills' ? 'active' : ''}
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </a>
        </nav>
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
      </div>
      <div className="portfolio-right">
        <section id="about" ref={sectionRefs.about} className="section">
          <h2>About</h2>
          <p>
            Hello! I'm John Doe, a senior developer specializing in the MERN Stack (MongoDB, Express, React, Node.js), React
            Native for mobile applications, and Next.js for server-side rendering and static site generation. With over 10
            years of experience in the industry, I have a proven track record of delivering high-quality, scalable web and
            mobile applications.
          </p>
  <p>
            I am passionate about coding, constantly learning new technologies, and staying updated with industry trends. I
            thrive in dynamic environments and am committed to building user-centric solutions that drive business success.
          </p>
          <p>
            In my free time, I contribute to open-source projects, write technical blogs, and mentor aspiring developers.
          </p>
                </section>
        <section id="experience" ref={sectionRefs.experience} className="section">
          <h2>Experience</h2>
         <h3>Senior Full Stack Developer at Tech Solutions</h3>
          <p>January 2015 - Present</p>
          <p>
            At Tech Solutions, I lead a team of developers in designing and implementing complex web applications using the
            MERN Stack and Next.js. My responsibilities include code reviews, optimizing performance, and ensuring the
            scalability and security of applications. I have successfully managed multiple projects from concept to
            deployment, resulting in a significant increase in customer satisfaction and business growth.
          </p>
          <h3>React Native Developer at Mobile Innovations</h3>
          <p>June 2012 - December 2014</p>
          <p>
            Developed cross-platform mobile applications using React Native. Worked closely with designers and product
            managers to create seamless user experiences and integrate with backend services. Successfully launched several
            high-profile apps that achieved over 100,000 downloads in the first year.
          </p>
        </section>
        <section id="projects" ref={sectionRefs.projects} className="section">
          <h2>Projects</h2>
           <div className="project">
            <h3>E-Commerce Platform</h3>
            <p>
              Developed a full-featured e-commerce platform using the MERN Stack, enabling users to browse products, make
              purchases, and track orders. Implemented payment gateway integration and real-time notifications. This project
              significantly boosted the client’s online sales and user engagement.
            </p>
          </div>
          <div className="project">
            <h3>Social Media App</h3>
            <p>
              Created a social media application with React Native, allowing users to share updates, photos, and videos.
              Integrated with Firebase for real-time data synchronization and push notifications. The app received positive
              feedback for its smooth performance and intuitive user interface.
            </p>
          </div>
          <div className="project">
            <h3>Corporate Website</h3>
            <p>
              Designed and developed a corporate website using Next.js, ensuring fast load times and SEO optimization.
              Implemented a content management system for easy updates by non-technical staff. This project improved the
              client’s online presence and led to increased traffic and conversions.
            </p>
          </div>
          <div className="project">
            <h3>Real-Time Chat Application</h3>
            <p>
              Built a real-time chat application using Socket.io and React. Implemented features like private messaging,
              online status indicators, and message history. The application achieved high user engagement and received
              positive reviews for its responsiveness and reliability.
            </p>
          </div>
          <div className="project">
            <h3>Dashboard Analytics Tool</h3>
            <p>
              Developed a dashboard analytics tool with React and Chart.js, providing users with insightful visualizations of
              data trends. Integrated with backend APIs to fetch and display real-time data. The tool helped businesses make
              data-driven decisions and improve operational efficiency.
            </p>
          </div>
          <div className="project">
            <h3>Portfolio Website</h3>
            <p>
              Designed and built a personal portfolio website using React and styled-components. Implemented responsive
              layouts and interactive components to showcase projects and skills effectively. The website received positive
              feedback for its design aesthetics and user-friendly navigation.
            </p>
          </div>
        </section>
        <section id="skills" ref={sectionRefs.skills} className="section">
          <h2>Skills</h2>
          <div className="skills-list">
            <div className="skill-category">
              <h3>Frontend Development</h3>
              <div className="skills">
                <span className="skill skill-react">React</span>
                <span className="skill skill-react-native">React Native</span>
                <span className="skill skill-nextjs">Next.js</span>
                <span className="skill skill-js">JavaScript</span>
                <span className="skill skill-html">HTML</span>
                <span className="skill skill-css">CSS</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend Development</h3>
              <div className="skills">
                <span className="skill skill-nodejs">Node.js</span>
                <span className="skill skill-express">Express</span>
                <span className="skill skill-mongodb">MongoDB</span>
                <span className="skill skill-graphql">GraphQL</span>
                <span className="skill skill-restapi">RESTful APIs</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Technologies</h3>
              <div className="skills">
                <span className="skill skill-git">Git</span>
                <span className="skill skill-jira">Jira</span>
                <span className="skill skill-aws">AWS</span>
                <span className="skill skill-docker">Docker</span>
                <span className="skill skill-cicd">CI/CD</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Other Skills</h3>
              <div className="skills">
                <span className="skill skill-agile">Agile Methodologies</span>
                <span className="skill skill-problem-solving">Problem Solving</span>
                <span className="skill skill-team-leadership">Team Leadership</span>
                <span className="skill skill-uiux">UI/UX Design</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
