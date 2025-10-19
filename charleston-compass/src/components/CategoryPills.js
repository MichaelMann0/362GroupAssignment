import React from 'react';

const CategoryPills = ({ currentCategory, setCurrentCategory }) => {
  const categories = [
    { key: 'all', label: '🌟 All' },
    { key: 'events', label: '🎭 Events' },
    { key: 'restaurants', label: '🍽️ Dining' },
    { key: 'attractions', label: '🏛️ Sights' },
    { key: 'outdoor', label: '🌳 Outdoor' },
    { key: 'culture', label: '🎨 Culture' }
  ];

  return (
    <div className="category-pills">
      {categories.map(category => (
        <button
          key={category.key}
          className={`pill ${currentCategory === category.key ? 'active' : ''}`}
          onClick={() => setCurrentCategory(category.key)}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryPills;
