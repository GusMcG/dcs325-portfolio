import React from 'react';
import './TopBar.css';

const TopBar = ({ title }) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <img src="/images/flag-california.png" alt="California Flag" className="flag" />
        <img src="/images/flag-maine.png" alt="Maine Flag" className="flag" />
        <img src="/images/flag-usa.png" alt="USA Flag" className="flag" />
        <div className="top-bar-title">{title}</div>
      </div>
      <div className="top-bar-center">
        <button className="menu-button" aria-label="Menu"></button>
      </div>
      <div className="top-bar-right">
        <button className="contact-button">Contact</button>
      </div>
    </div>
  );
};

export default TopBar;