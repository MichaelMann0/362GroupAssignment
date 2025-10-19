import React, { useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import CategoryPills from './components/CategoryPills';
import ResultsArea from './components/ResultsArea';
import Sidebar from './components/Sidebar';
import FloatingShapes from './components/FloatingShapes';


function App() {

  const [currentCategory, setCurrentCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [itinerary, setItinerary] = useState([]);
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

  const addToItinerary = (item) => {
    if (itinerary.find(i => i.id === item.id)) return;
    setItinerary([...itinerary, item]);
  };

  const removeFromItinerary = (itemId) => {
    setItinerary(itinerary.filter(item => item.id !== itemId));
  };

  const clearItinerary = () => {
    if (itinerary.length === 0) return;
    if (window.confirm('Clear your entire itinerary? 🗑️')) {
      setItinerary([]);
    }
  };

  const updateStats = () => {
    const events = itinerary.filter(item => item.type === 'events').length;
    const restaurants = itinerary.filter(item => item.type === 'restaurants').length;
    return { events, restaurants };
  };

  const stats = updateStats();

  return (
    <div className="App">
      <FloatingShapes />
      
      <div className="container">
        <div className="header">
          <h1>🌸 Charleston Spring Explorer</h1>
          <p>Discover the magic of Charleston in bloom</p>
        </div>

        <div className="main-grid">
          <div className="content-area">
            <SearchBox 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            
            <CategoryPills 
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
            />

            <ResultsArea 
              items={getFilteredItems()}
              addToItinerary={addToItinerary}
              itinerary={itinerary}
            />
          </div>

          <Sidebar 
            itinerary={itinerary}
            removeFromItinerary={removeFromItinerary}
            clearItinerary={clearItinerary}
            stats={stats}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
