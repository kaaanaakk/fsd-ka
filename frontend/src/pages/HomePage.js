import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="middle-box">
      <div className="box-header">
        <div className="box-title">TEAM 'LUE</div>
        <div className="box-subtitle">Welcome to the Team manager</div>
      </div>
      
      <div className="buttons-container">
        <Link to="/members" className="button">View Members</Link>
        <Link to="/add" className="button">Add Members</Link>
      </div>
    </div>
  );
};

export default HomePage;