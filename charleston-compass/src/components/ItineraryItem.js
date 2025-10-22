import React from 'react';
import './ItineraryItem.css';

const ItineraryItem = ({ item, onRemove }) => {
  const handleRemove = () => {
    if (onRemove) {
      onRemove(item.id);
    }
  };

  const formatPrice = (price) => {
    if (typeof price === 'string') return price;
    if (typeof price === 'number') return `$${price}`;
    return 'Price varies';
  };

  const getPrice = () => {
    if (item.price) return formatPrice(item.price);
    if (item.priceRange) return item.priceRange;
    if (item.admission) return item.admission;
    return 'Free';
  };

  const getDate = () => {
    if (item.date) return item.date;
    return 'Check availability';
  };

  return (
    <div className="itinerary-item">
      <div className="item-image">
        <img 
          src={item.image || `https://images.unsplash.com/photo-${1500000000000 + item.id}?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80`}
          alt={item.name}
        />
      </div>
      
      <div className="item-content">
        <h4 className="item-title">{item.name}</h4>
        <div className="item-meta">
          <div className="meta-item">
            <i className="fas fa-calendar-alt"></i>
            <span>{getDate()}</span>
          </div>
          <div className="meta-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>{item.location}</span>
          </div>
          <div className="meta-item">
            <i className="fas fa-dollar-sign"></i>
            <span>{getPrice()}</span>
          </div>
        </div>
      </div>
      
      <button 
        className="remove-button"
        onClick={handleRemove}
        aria-label="Remove from itinerary"
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default ItineraryItem;
