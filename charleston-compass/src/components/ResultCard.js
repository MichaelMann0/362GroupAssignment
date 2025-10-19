import React, { useState } from 'react';

const ResultCard = ({ item, addToItinerary, itinerary, index }) => {
  const [isAdded, setIsAdded] = useState(false);
  const isInItinerary = itinerary.find(i => i.id === item.id);

  const handleAddToItinerary = () => {
    if (isInItinerary) return;
    
    addToItinerary(item);
    setIsAdded(true);
    
    setTimeout(() => {
      setIsAdded(false);
    }, 1000);
  };

  const getMetaItems = () => {
    const metaItems = [];
    
    if (item.date) metaItems.push({ icon: '📅', text: item.date });
    if (item.location) metaItems.push({ icon: '📍', text: item.location });
    if (item.price) metaItems.push({ icon: '💰', text: item.price });
    if (item.admission) metaItems.push({ icon: '🎫', text: item.admission });
    if (item.rating) metaItems.push({ icon: '', text: item.rating });
    if (item.priceRange) metaItems.push({ icon: '', text: item.priceRange });
    
    return metaItems;
  };

  const metaItems = getMetaItems();

  return (
    <div 
      className="card bounce-in" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <h3>{item.icon} {item.name}</h3>
      <div className="card-meta">
        {metaItems.map((meta, idx) => (
          <span key={idx} className="meta-item">
            {meta.icon && <span>{meta.icon}</span>}
            <span>{meta.text}</span>
          </span>
        ))}
      </div>
      <p>{item.description}</p>
      <div className="card-actions">
        <button 
          className="btn-spring" 
          onClick={handleAddToItinerary}
          disabled={isInItinerary}
          style={{
            background: isAdded ? 'linear-gradient(135deg, #00b894, #55a3ff)' : 
                       isInItinerary ? 'linear-gradient(135deg, #95a5a6, #bdc3c7)' : 
                       'linear-gradient(135deg, #00b894, #00cec9)'
          }}
        >
          {isAdded ? 'Added! ✨' : isInItinerary ? 'Already Added' : 'Add to Itinerary'}
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
