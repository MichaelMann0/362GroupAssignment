import React, { useState } from 'react';
import './UserTypeToggle.css';

const UserTypeToggle = ({ onToggle, defaultType = 'traveler' }) => {
  const [userType, setUserType] = useState(defaultType);

  const handleToggle = () => {
    const newType = userType === 'traveler' ? 'host' : 'traveler';
    setUserType(newType);
    if (onToggle) {
      onToggle(newType);
    }
  };

  return (
    <div className="user-type-toggle">
      <div className="toggle-container">
        <span className={`toggle-label ${userType === 'traveler' ? 'active' : ''}`}>
          Traveler
        </span>
        <button 
          className={`toggle-switch ${userType === 'host' ? 'switched' : ''}`}
          onClick={handleToggle}
          aria-label="Toggle user type"
        >
          <div className="toggle-slider"></div>
        </button>
        <span className={`toggle-label ${userType === 'host' ? 'active' : ''}`}>
          Host
        </span>
      </div>
    </div>
  );
};

export default UserTypeToggle;
