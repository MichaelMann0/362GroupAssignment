import React, { useState } from 'react';
import './ListingCard.css';

const ListingCard = ({ item, onSave, isSaved = false }) => {
  const [saved, setSaved] = useState(isSaved);

  const handleSave = () => {
    setSaved(!saved);
    if (onSave) {
      onSave(item, !saved);
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
    <div className="listing-card">
      <div className="card-header">
        <h3 className="card-title">{item.name}</h3>
        <button 
          className={`save-button ${saved ? 'saved' : ''}`}
          onClick={handleSave}
          aria-label={saved ? 'Remove from saved' : 'Save item'}
        >
          {saved ? '❤️' : '🤍'}
        </button>
      </div>
      
      <div className="card-body">
        <div className="metadata">
          <div className="meta-item">
            <span className="meta-icon">📅</span>
            <span className="meta-text">{getDate()}</span>
          </div>
          <div className="meta-item">
            <span className="meta-icon">📍</span>
            <span className="meta-text">{item.location}</span>
          </div>
          <div className="meta-item">
            <span className="meta-icon">💰</span>
            <span className="meta-text">{getPrice()}</span>
          </div>
          {item.rating && (
            <div className="meta-item">
              <span className="meta-icon">⭐</span>
              <span className="meta-text">{item.rating}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="card-footer">
        <p className="card-description">{item.description}</p>
      </div>
    </div>
  );
};

export default ListingCard;
