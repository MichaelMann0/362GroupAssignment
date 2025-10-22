import React from 'react';
import './CategoriesCarousel.css';

const CategoriesCarousel = ({ currentCategory, setCurrentCategory }) => {
  const categories = [
    { id: 'all', name: 'All Events', icon: '🎉', color: '#008080' },
    { id: 'events', name: 'Popular Events', icon: '⭐', color: '#B87333' },
    { id: 'restaurants', name: 'Dining', icon: '🍽️', color: '#CC6666' },
    { id: 'culture', name: 'Arts & Culture', icon: '🎨', color: '#8B5A96' },
    { id: 'outdoor', name: 'Outdoors', icon: '🌿', color: '#4A9B8E' },
    { id: 'attractions', name: 'Attractions', icon: '🏛️', color: '#D4A574' }
  ];

  return (
    <div className="categories-carousel">
      <div className="carousel-container">
        <div className="carousel-track">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`carousel-item ${currentCategory === category.id ? 'active' : ''}`}
              onClick={() => setCurrentCategory(category.id)}
              style={{ '--category-color': category.color }}
            >
              <div className="category-icon">{category.icon}</div>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesCarousel;
