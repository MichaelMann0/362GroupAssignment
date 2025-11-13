import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Header.css';

const Header = ({ onToggleLogin, onToggleItinerary, isItineraryVisible }) => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    if (onToggleLogin) {
      onToggleLogin();
    }
  };

  return (
    <header className="main-header">
      <div className="header-content">
        <div className="header-title">
          <h1>🧭Charleston Compass</h1>
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
          {currentUser ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ 
                color: '#006A4E', 
                fontWeight: '600',
                fontSize: '0.95em',
                fontFamily: "'Inter', sans-serif"
              }}>
                {currentUser.displayName || currentUser.email?.split('@')[0]}
              </span>
              <button 
                onClick={handleLogout}
                className="nav-icon-button"
                style={{
                  background: '#006A4E',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer'
                }}
                aria-label="Logout"
              >
                Logout
              </button>
            </div>
          ) : (
            <button 
              className="nav-icon-button"
              onClick={handleLoginClick}
              aria-label="Open login modal"
              title="Login / Sign up"
              style={{ 
                cursor: 'pointer',
                fontSize: '1.8em',
                padding: '4px 8px'
              }}
            >
              <i className="fas fa-user-circle"></i>
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;