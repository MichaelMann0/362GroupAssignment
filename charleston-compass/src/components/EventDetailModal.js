import React from 'react';
import './EventDetailModal.css';

const placeholderImage = process.env.PUBLIC_URL + '/images/placeholders/event-placeholder.svg';

const EventDetailModal = ({ event, isOpen, onClose, onBookNow, onContactOrganizer }) => {
  if (!isOpen || !event) return null;

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

  const handleBookNow = () => {
    if (onBookNow) {
      onBookNow(event);
    } else {
      console.log('Book/Buy clicked for:', event.name);
    }
  };

  const handleContactOrganizer = () => {
    if (onContactOrganizer) {
      onContactOrganizer(event);
    } else {
      console.log('Contact organizer for:', event.name);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <i className="fas fa-times"></i>
        </button>
        
        <div className="modal-image-container">
          <img 
            src={event.photo || event.image || placeholderImage}
            alt={event.name}
            className="modal-image"
          />
          {isFree() && (
            <div className="modal-free-tag">Free</div>
          )}
        </div>
        
        <div className="modal-body">
          <h1 className="modal-title">{event.name}</h1>
          
          <div className="modal-meta">
            <div className="meta-section">
              <h3>Event Details</h3>
              <div className="meta-grid">
                <div className="meta-item">
                  <i className="fas fa-calendar-alt"></i>
                  <div>
                    <strong>Date & Time</strong>
                    <span>{getDate()}</span>
                  </div>
                </div>
                <div className="meta-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <strong>Location</strong>
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="meta-item">
                  <i className="fas fa-dollar-sign"></i>
                  <div>
                    <strong>Price</strong>
                    <span>{getPrice()}</span>
                  </div>
                </div>
                {event.attendees && (
                  <div className="meta-item">
                    <i className="fas fa-users"></i>
                    <div>
                      <strong>Attendees</strong>
                      <span>{event.attendees} people attending</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {event.organizer && (
              <div className="meta-section">
                <h3>Organizer</h3>
                <div className="organizer-info">
                  <div className="organizer-avatar">
                    <i className="fas fa-user"></i>
                  </div>
                  <div className="organizer-details">
                    <strong>{event.organizer.name || 'Event Organizer'}</strong>
                    <span>{event.organizer.email || 'contact@example.com'}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="modal-description">
            <h3>About This Event</h3>
            <p>{event.description}</p>
          </div>
          
          <div className="modal-actions">
            <button 
              className="action-button secondary"
              onClick={handleContactOrganizer}
            >
              <i className="fas fa-envelope"></i>
              Contact Organizer
            </button>
            <button 
              className="action-button primary"
              onClick={handleBookNow}
            >
              <i className="fas fa-ticket-alt"></i>
              {isFree() ? 'Reserve Spot' : 'Book Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailModal;
