import React from 'react';

const SearchBox = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-container">
      <input 
        type="text" 
        className="search-box" 
        placeholder="Search everything in Charleston..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <span className="search-icon">🔍</span>
    </div>
  );
};

export default SearchBox;
