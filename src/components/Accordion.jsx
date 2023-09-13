// src/components/Accordion.js
import React, { useState } from 'react';
import './Accordion.css';
import { MdKeyboardArrowDown } from "react-icons/md";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h5>{title}</h5>
        <span className={`arrow ${isOpen ? 'open' : ''}`}><MdKeyboardArrowDown/></span>
      </div>
      <div className="accordion-content">{isOpen && content}</div>
    </div>
  );
};

export default Accordion;
