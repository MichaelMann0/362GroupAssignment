import React, { useState } from 'react';
import './EventCard.css';

const EventCard = ({ event, onSave, onViewDetails, isSaved = false }) => {
  const [saved, setSaved] = useState(isSaved);

  const handleSave = () => {
    setSaved(!saved);
    if (onSave) {
      onSave(event, !saved);
    }
  };

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails(event);
    }
  };

  const formatPrice = (price) => {
    if (typeof price === 'string') return price;
    if (typeof price === 'number') return `$${price}`;
    return 'Price varies';
  };

  const getPrice = () => {
    if (event.price) return formatPrice(event.price);
    if (event.priceRange) return event.priceRange;
    if (event.admission) return event.admission;
    return 'Free';
  };

  const getDate = () => {
    if (event.date) return event.date;
    return 'Check availability';
  };

  const isFree = () => {
    const price = getPrice();
    return price === 'Free' || price === '0' || price === '$0';
  };

  return (
    <div className="event-card">
      <div className="card-image-container">
        <img 
          src={event.image || `https://images.unsplash.com/photo-${1500000000000 + event.id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
          alt={event.name}
          className="card-image"
        />
        {isFree() && (
          <div className="free-tag">Free</div>
        )}
        <div className="card-actions">
          <button 
            className={`action-button save-button ${saved ? 'saved' : ''}`}
            onClick={handleSave}
            aria-label={saved ? 'Remove from saved' : 'Save event'}
          >
            <i className={`fas fa-heart ${saved ? 'saved' : ''}`}></i>
          </button>
          <button 
            className="action-button expand-button"
            onClick={handleViewDetails}
            aria-label="View event details"
          >
            <i className="fas fa-expand-alt"></i>
          </button>
        </div>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{event.name}</h3>
        
        <div className="card-meta">
          <div className="meta-item">
            <i className="fas fa-calendar-alt"></i>
            <span>{getDate()}</span>
          </div>
          <div className="meta-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>{event.location}</span>
          </div>
          <div className="meta-item">
            <i className="fas fa-dollar-sign"></i>
            <span>{getPrice()}</span>
          </div>
          {event.attendees && (
            <div className="meta-item">
              <i className="fas fa-users"></i>
              <span>{event.attendees} attending</span>
            </div>
          )}
        </div>
        
        <p className="card-description">{event.description}</p>
      </div>
    </div>
  );
};

export default EventCard;
