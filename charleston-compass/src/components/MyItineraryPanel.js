import React from 'react';
import ItineraryItem from './ItineraryItem';
import './MyItineraryPanel.css';

const MyItineraryPanel = ({ 
  isVisible, 
  onToggle, 
  itinerary, 
  onRemoveItem, 
  onClearAll 
}) => {
  const handleClearAll = () => {
    if (window.confirm('Clear your entire itinerary? This action cannot be undone.')) {
      if (onClearAll) {
        onClearAll();
      }
    }
  };

  return (
    <div className={`itinerary-panel ${isVisible ? 'visible' : ''}`}>
      <div className="itinerary-header">
        <div className="itinerary-title">
          <i className="fas fa-clipboard-list"></i>
          <h3>My Itinerary</h3>
          <span className="item-count">({itinerary.length})</span>
        </div>
        <button 
          className="toggle-button"
          onClick={onToggle}
          aria-label="Toggle itinerary panel"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      
      <div className="itinerary-content">
        {itinerary.length === 0 ? (
          <div className="empty-itinerary">
            <div className="empty-icon">
              <i className="fas fa-calendar-plus"></i>
            </div>
            <p>Your itinerary is empty</p>
            <span>Start adding events to build your perfect Charleston experience</span>
          </div>
        ) : (
          <>
            <div className="itinerary-list">
              {itinerary.map((item) => (
                <ItineraryItem
                  key={item.id}
                  item={item}
                  onRemove={onRemoveItem}
                />
              ))}
            </div>
            
            <div className="itinerary-actions">
              <button 
                className="clear-all-button"
                onClick={handleClearAll}
              >
                <i className="fas fa-trash"></i>
                Clear All
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyItineraryPanel;
