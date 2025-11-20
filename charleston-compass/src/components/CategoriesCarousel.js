import React from 'react';
import './CategoriesCarousel.css';

const CategoriesCarousel = ({ selectedCategories = [], onToggleCategory }) => {
  const categories = [
    { id: 'all', name: 'All Experiences', icon: '🎉', color: '#008080' },
    { id: 'culture', name: 'Culture', icon: '🎨', color: '#8B5A96' },
    { id: 'outdoors', name: 'Nature & Outdoors', icon: '🌿', color: '#4A9B8E' },
    { id: 'food', name: 'Food & Dining', icon: '🍽️', color: '#CC6666' },
    { id: 'family', name: 'Family-Friendly', icon: '👨‍👩‍👧', color: '#F9A826' },
    { id: 'nightlife', name: 'Nightlife', icon: '🌙', color: '#4F46E5' },
    { id: 'seasonal', name: 'Seasonal', icon: '❄️', color: '#00B7C2' }
  ];
  const isAllActive = selectedCategories.length === 0;

  return (
    <div className="categories-carousel">
      <div className="carousel-container">
        <div className="carousel-track">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`carousel-item ${
                category.id === 'all'
                  ? isAllActive
                    ? 'active'
                    : ''
                  : selectedCategories.includes(category.id)
                    ? 'active'
                    : ''
              }`}
              onClick={() => onToggleCategory(category.id)}
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
