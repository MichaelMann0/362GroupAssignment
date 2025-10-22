import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ onToggleLogin, onToggleItinerary, isItineraryVisible }) => {
  return (
    <header className="main-header">
      <div className="header-content">
        <div className="header-title">
          <h1>🌸 Charleston Spring Explorer</h1>
          <p>Discover the magic of Charleston in bloom</p>
        </div>
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/map" className="nav-link">Map</Link>
          <button 
            className="nav-icon-button"
            onClick={onToggleItinerary}
            aria-label="Toggle itinerary panel"
          >
            <i className="fas fa-clipboard-list"></i>
            {!isItineraryVisible && <span className="nav-label">My Itinerary</span>}
          </button>
          <button 
            className="nav-icon-button"
            onClick={onToggleLogin}
            aria-label="Open login modal"
          >
            <i className="fas fa-user-circle"></i>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
