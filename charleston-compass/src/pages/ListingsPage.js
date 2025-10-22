import React, { useState } from 'react';
import SearchBox from '../components/SearchBox';
import CategoryPills from '../components/CategoryPills';
import ListingCard from '../components/ListingCard';
import './ListingsPage.css';

const ListingsPage = () => {
  const [currentCategory, setCurrentCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [savedItems, setSavedItems] = useState([]);

  const [allData] = useState([
    // Events
    {
      id: 1,
      type: 'events',
      category: 'culture',
      name: "Charleston Spring Garden Festival",
      date: "April 15-21, 2024",
      location: "Various Gardens",
      description: "Celebrate Charleston's blooming gardens with guided tours, photography workshops, and botanical talks.",
      price: "$25-45",
      icon: "🌸"
    },
    {
      id: 2,
      type: 'events',
      category: 'outdoor',
      name: "Harbor Sunset Kayak Tour",
      date: "Daily at 6:30 PM",
      location: "Charleston Harbor",
      description: "Paddle through calm waters as the sun sets over the historic city skyline.",
      price: "$55",
      icon: "🚣‍♀️"
    },
    {
      id: 3,
      type: 'events',
      category: 'culture',
      name: "Spring Art Walk",
      date: "First Friday Monthly",
      location: "King Street Arts District",
      description: "Monthly gallery hop featuring local artists, live music, and wine tastings.",
      price: "Free",
      icon: "🎨"
    },
    {
      id: 4,
      type: 'events',
      category: 'outdoor',
      name: "Cherry Blossom Picnic Series",
      date: "Weekends in April",
      location: "Magnolia Plantation",
      description: "Enjoy curated picnic baskets among blooming cherry trees and azaleas.",
      price: "$40",
      icon: "🌺"
    },
    
    // Restaurants
    {
      id: 11,
      type: 'restaurants',
      category: 'fine-dining',
      name: "The Rooftop at The Vendue",
      cuisine: "American",
      location: "Vendue Range",
      rating: "⭐⭐⭐⭐⭐",
      description: "Elegant rooftop dining with harbor views and seasonal spring menu.",
      priceRange: "$$$",
      icon: "🌿"
    },
    {
      id: 12,
      type: 'restaurants',
      category: 'casual',
      name: "Callie's Hot Little Biscuit",
      cuisine: "Southern",
      location: "King Street",
      rating: "⭐⭐⭐⭐",
      description: "Famous for fluffy buttermilk biscuits and spring berry jams.",
      priceRange: "$",
      icon: "🥐"
    },
    {
      id: 13,
      type: 'restaurants',
      category: 'outdoor',
      name: "The Darling Oyster Bar",
      cuisine: "Seafood",
      location: "King Street",
      rating: "⭐⭐⭐⭐⭐",
      description: "Fresh oysters and patio seating perfect for spring evenings.",
      priceRange: "$$$",
      icon: "🦪"
    },
    {
      id: 14,
      type: 'restaurants',
      category: 'casual',
      name: "Jestine's Kitchen",
      cuisine: "Southern",
      location: "Meeting Street",
      rating: "⭐⭐⭐⭐",
      description: "Authentic Lowcountry cuisine in a cozy, family-style setting.",
      priceRange: "$$",
      icon: "🍳"
    },

    // Attractions
    {
      id: 21,
      type: 'attractions',
      category: 'outdoor',
      name: "Magnolia Plantation Gardens",
      location: "Ashley River Road",
      description: "America's oldest public garden with stunning spring blooms and wildlife.",
      admission: "$20",
      icon: "🌻"
    },
    {
      id: 22,
      type: 'attractions',
      category: 'culture',
      name: "Rainbow Row",
      location: "East Bay Street",
      description: "Iconic pastel-colored historic houses, perfect for spring photography.",
      admission: "Free",
      icon: "🏠"
    },
    {
      id: 23,
      type: 'attractions',
      category: 'outdoor',
      name: "Waterfront Park",
      location: "Concord Street",
      description: "Beautiful harbor views with famous pineapple fountain and spring flowers.",
      admission: "Free",
      icon: "⛲"
    },
    {
      id: 24,
      type: 'attractions',
      category: 'culture',
      name: "Charleston City Market",
      location: "Market Street",
      description: "Historic market with local crafts, perfect for spring shopping.",
      admission: "Free",
      icon: "🛍️"
    },
    {
      id: 25,
      type: 'attractions',
      category: 'outdoor',
      name: "Boone Hall Plantation",
      location: "Mount Pleasant",
      description: "Historic plantation with oak-lined entrance and spring garden tours.",
      admission: "$25",
      icon: "🌳"
    }
  ]);
  
  const filterByCategory = (category) => {
    if (category === 'all') return allData;
    return allData.filter(item => item.category === category || item.type === category);
  };

  const filterBySearch = (items, query) => {
    if (!query) return items;
    return items.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.location.toLowerCase().includes(query.toLowerCase())
    );
  };

  const getFilteredItems = () => {
    const categoryFiltered = filterByCategory(currentCategory);
    return filterBySearch(categoryFiltered, searchQuery);
  };

  const handleSaveItem = (item, isSaved) => {
    if (isSaved) {
      setSavedItems([...savedItems, item]);
    } else {
      setSavedItems(savedItems.filter(savedItem => savedItem.id !== item.id));
    }
  };

  const isItemSaved = (item) => {
    return savedItems.some(savedItem => savedItem.id === item.id);
  };

  return (
    <div className="listings-page">
      <div className="listings-container">
        <SearchBox 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        
        <CategoryPills 
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        />

        <div className="listings-content">
          {getFilteredItems().length === 0 ? (
            <div className="no-results">
              <p>No items found matching your criteria</p>
            </div>
          ) : (
            <div className="listings-grid">
              {getFilteredItems().map((item) => (
                <ListingCard
                  key={item.id}
                  item={item}
                  onSave={handleSaveItem}
                  isSaved={isItemSaved(item)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingsPage;
