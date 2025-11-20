import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategoriesCarousel from './components/CategoriesCarousel';
import EventGrid from './components/EventGrid';
import EventDetailModal from './components/EventDetailModal';
import LoginModal from './components/LoginModal';
import MyItineraryPanel from './components/MyItineraryPanel';
import MapPage from './pages/MapPage';
import FloatingShapes from './components/FloatingShapes';
import TeamPage from './pages/TeamPage';

function App() {
  const [currentCategory, setCurrentCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [savedEvents, setSavedEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isItineraryVisible, setIsItineraryVisible] = useState(false);

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
      icon: "🌸",
      attendees: 150,
      organizer: { name: "Charleston Garden Society", email: "info@charlestongardens.org" }
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
      icon: "🚣‍♀️",
      attendees: 24,
      organizer: { name: "Charleston Kayak Tours", email: "tours@charlestonkayak.com" }
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
      icon: "🎨",
      attendees: 200,
      organizer: { name: "King Street Arts Association", email: "events@kingstreetarts.org" }
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
      icon: "🌺",
      attendees: 80,
      organizer: { name: "Magnolia Plantation", email: "events@magnoliaplantation.org" }
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
      icon: "🌿",
      attendees: 50,
      organizer: { name: "The Vendue Hotel", email: "dining@thevendue.com" }
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
      icon: "🥐",
      attendees: 30,
      organizer: { name: "Callie's Kitchen", email: "info@calliesbiscuit.com" }
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
      icon: "🦪",
      attendees: 40,
      organizer: { name: "The Darling", email: "reservations@thedarling.com" }
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
      icon: "🍳",
      attendees: 35,
      organizer: { name: "Jestine's Kitchen", email: "info@jestineskitchen.com" }
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
      icon: "🌻",
      attendees: 100,
      organizer: { name: "Magnolia Plantation", email: "info@magnoliaplantation.org" }
    },
    {
      id: 22,
      type: 'attractions',
      category: 'culture',
      name: "Rainbow Row",
      location: "East Bay Street",
      description: "Iconic pastel-colored historic houses, perfect for spring photography.",
      admission: "Free",
      icon: "🏠",
      attendees: 50,
      organizer: { name: "Charleston Historic Foundation", email: "info@charlestonhistoric.org" }
    },
    {
      id: 23,
      type: 'attractions',
      category: 'outdoor',
      name: "Waterfront Park",
      location: "Concord Street",
      description: "Beautiful harbor views with famous pineapple fountain and spring flowers.",
      admission: "Free",
      icon: "⛲",
      attendees: 75,
      organizer: { name: "Charleston Parks Department", email: "parks@charleston.gov" }
    },
    {
      id: 24,
      type: 'attractions',
      category: 'culture',
      name: "Charleston City Market",
      location: "Market Street",
      description: "Historic market with local crafts, perfect for spring shopping.",
      admission: "Free",
      icon: "🛍️",
      attendees: 120,
      organizer: { name: "Charleston City Market", email: "info@charlestoncitymarket.com" }
    },
    {
      id: 25,
      type: 'attractions',
      category: 'outdoor',
      name: "Boone Hall Plantation",
      location: "Mount Pleasant",
      description: "Historic plantation with oak-lined entrance and spring garden tours.",
      admission: "$25",
      icon: "🌳",
      attendees: 60,
      organizer: { name: "Boone Hall Plantation", email: "tours@boonehallplantation.org" }
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

  const getFilteredEvents = () => {
    const categoryFiltered = filterByCategory(currentCategory);
    return filterBySearch(categoryFiltered, searchQuery);
  };

  const handleSaveEvent = (event, isSaved) => {
    if (isSaved) {
      setSavedEvents([...savedEvents, event]);
    } else {
      setSavedEvents(savedEvents.filter(saved => saved.id !== event.id));
    }
  };

  const handleViewEventDetails = (event) => {
    setSelectedEvent(event);
    setIsEventModalOpen(true);
  };

  const handleRemoveFromItinerary = (eventId) => {
    setSavedEvents(savedEvents.filter(event => event.id !== eventId));
  };

  const handleClearItinerary = () => {
    setSavedEvents([]);
  };

  const handleToggleLogin = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  const handleToggleItinerary = () => {
    setIsItineraryVisible(!isItineraryVisible);
  };

  return (
    <Router>
      <div className="App">
        <FloatingShapes />
        <Header 
          onToggleLogin={handleToggleLogin}
          onToggleItinerary={handleToggleItinerary}
          isItineraryVisible={isItineraryVisible}
        />
        
        <Routes>
          <Route path="/" element={
            <div className="main-content">
              <HeroSection 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              <div className="content-container">
                <CategoriesCarousel 
                  currentCategory={currentCategory}
                  setCurrentCategory={setCurrentCategory}
                />
                <EventGrid 
                  events={getFilteredEvents()}
                  onSaveEvent={handleSaveEvent}
                  onViewDetails={handleViewEventDetails}
                  savedEvents={savedEvents}
                />
              </div>
            </div>
          } />
          <Route path="/map" element={<MapPage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>

        <MyItineraryPanel 
          isVisible={isItineraryVisible}
          onToggle={handleToggleItinerary}
          itinerary={savedEvents}
          onRemoveItem={handleRemoveFromItinerary}
          onClearAll={handleClearItinerary}
        />

        <EventDetailModal 
          event={selectedEvent}
          isOpen={isEventModalOpen}
          onClose={() => setIsEventModalOpen(false)}
        />

        <LoginModal 
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;