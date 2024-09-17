import React from 'react';
import './Section.css'

const Section = ({ id, title, children, sectionRef }) => {
  return (
    <section id={id} ref={sectionRef} className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
