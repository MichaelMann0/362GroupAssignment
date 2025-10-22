import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchQuery, setSearchQuery, isHero = false }) => {
  return (
    <div className={`search-container ${isHero ? 'hero-search' : ''}`}>
      <input 
        type="text" 
        className={`search-box ${isHero ? 'hero-search-box' : ''}`}
        placeholder="Search everything in Charleston..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <span className="search-icon">
        <i className="fas fa-search"></i>
      </span>
    </div>
  );
};

export default SearchBox;
