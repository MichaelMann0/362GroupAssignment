import React from 'react';
import SearchBox from './SearchBox';
import './HeroSection.css';

const HeroSection = ({ searchQuery, setSearchQuery }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Discover the Magic of Charleston</h1>
          <p>Explore the historic charm and vibrant culture of Charleston through our curated events and experiences</p>
        </div>
        <div className="hero-search">
          <SearchBox 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            isHero={true}
          />
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default HeroSection;
