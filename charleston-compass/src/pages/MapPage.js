import React from 'react';
import './MapPage.css';

const MapPage = () => {
  return (
    <div className="map-page">
      <div className="map-container">
        <div className="map-header">
          <h1>Interactive Map</h1>
          <p>The interactive map feature is coming soon!</p>
        </div>
        
        <div className="map-placeholder">
          <div className="placeholder-content">
            <div className="map-icon">🗺️</div>
            <h2>Map Coming Soon</h2>
            <p>We're working on bringing you an interactive map experience to explore Charleston's attractions, restaurants, and events.</p>
            <div className="coming-soon-features">
              <div className="feature-item">
                <span className="feature-icon">📍</span>
                <span>Interactive markers for all locations</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔍</span>
                <span>Search and filter directly on the map</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🚶‍♀️</span>
                <span>Walking directions and routes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
