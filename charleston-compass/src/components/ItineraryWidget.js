import React from 'react';

const ItineraryWidget = ({ itinerary, removeFromItinerary, clearItinerary }) => {
  return (
    <div className="widget">
      <h3>📋 My Itinerary <span className="itinerary-counter">{itinerary.length}</span></h3>
      <div id="itinerary-items">
        {itinerary.length === 0 ? (
          <p style={{ color: '#7f8c8d', textAlign: 'center', fontStyle: 'italic' }}>
            Start building your perfect Charleston day!
          </p>
        ) : (
          itinerary.map(item => (
            <div key={item.id} className="itinerary-item">
              <div>
                <strong>{item.icon} {item.name}</strong><br />
                <small style={{ color: '#7f8c8d' }}>{item.location}</small>
              </div>
              <button 
                className="remove-btn" 
                onClick={() => removeFromItinerary(item.id)}
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>
      <button 
        className="btn-spring" 
        onClick={clearItinerary} 
        style={{ width: '100%', marginTop: '15px' }}
        disabled={itinerary.length === 0}
      >
        Clear All
      </button>
    </div>
  );
};

export default ItineraryWidget;
