import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategoriesCarousel from './components/CategoriesCarousel';
import FiltersPanel from './components/FiltersPanel';
import EventGrid from './components/EventGrid';
import EventDetailModal from './components/EventDetailModal';
import LoginModal from './components/LoginModal';
import MyItineraryPanel from './components/MyItineraryPanel';
import MapPage from './pages/MapPage';
import FloatingShapes from './components/FloatingShapes';
import TeamPage from './pages/TeamPage';
import {
  CATEGORY_FILTERS,
  PRICE_FILTERS,
  DATE_FILTERS,
  LOCATION_FILTERS,
  SORT_OPTIONS
} from './constants/filterOptions';

const priceTierLookup = {
  '$': 15,
  '$$': 35,
  '$$$': 60,
  '$$$$': 90
};

const getDateOffset = (days = 0) => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + days);
  return date.toISOString().split('T')[0];
};

const buildInitialData = () => ([
  {
    id: 1,
    type: 'events',
    category: 'culture',
    categoryTags: ['culture', 'seasonal', 'family'],
    tags: ['garden', 'festival', 'flowers'],
    name: "Charleston Spring Garden Festival",
    date: "April 15-21, 2025",
    startDate: getDateOffset(5),
    endDate: getDateOffset(12),
    location: "Various Gardens",
    description: "Celebrate Charleston's blooming gardens with guided tours, photography workshops, and botanical talks.",
    price: "$25-45",
    icon: "🌸",
    attendees: 150,
    organizer: { name: "Charleston Garden Society", email: "info@charlestongardens.org" },
    photo: "/images/events/gardenFestival.jpg",
    distanceMiles: 1.2,
    area: 'downtown',
    popularityScore: 95
  },
  {
    id: 2,
    type: 'events',
    category: 'outdoor',
    categoryTags: ['outdoors', 'family', 'seasonal'],
    tags: ['kayak', 'sunset', 'water'],
    name: "Harbor Sunset Kayak Tour",
    date: "Daily at 6:30 PM",
    startDate: getDateOffset(0),
    endDate: getDateOffset(14),
    location: "Charleston Harbor",
    description: "Paddle through calm waters as the sun sets over the historic city skyline.",
    price: "$55",
    icon: "🚣‍♀️",
    attendees: 24,
    organizer: { name: "Charleston Kayak Tours", email: "tours@charlestonkayak.com" },
    photo: "/images/events/sunsetKayakTour.jpg",
    distanceMiles: 0.9,
    area: 'islands',
    popularityScore: 88
  },
  {
    id: 3,
    type: 'events',
    category: 'culture',
    categoryTags: ['culture', 'nightlife'],
    tags: ['art', 'walk', 'gallery'],
    name: "Spring Art Walk",
    date: "First Friday Monthly",
    startDate: getDateOffset(3),
    endDate: getDateOffset(3),
    location: "King Street Arts District",
    description: "Monthly gallery hop featuring local artists, live music, and wine tastings.",
    price: "Free",
    icon: "🎨",
    attendees: 200,
    organizer: { name: "King Street Arts Association", email: "events@kingstreetarts.org" },
    photo: "/images/events/spring-art-walk.png",
    distanceMiles: 0.4,
    area: 'downtown',
    popularityScore: 98
  },
  {
    id: 4,
    type: 'events',
    category: 'outdoor',
    categoryTags: ['outdoors', 'family', 'seasonal'],
    tags: ['picnic', 'cherry blossom'],
    name: "Cherry Blossom Picnic Series",
    date: "Weekends in April",
    startDate: getDateOffset(10),
    endDate: getDateOffset(38),
    location: "Magnolia Plantation",
    description: "Enjoy curated picnic baskets among blooming cherry trees and azaleas.",
    price: "$40",
    icon: "🌺",
    attendees: 80,
    organizer: { name: "Magnolia Plantation", email: "events@magnoliaplantation.org" },
    photo: "/images/events/cherry-blossom-picnic.png",
    distanceMiles: 8.5,
    area: 'islands',
    popularityScore: 83
  },

  // Restaurants
  {
    id: 11,
    type: 'restaurants',
    category: 'fine-dining',
    categoryTags: ['food', 'nightlife'],
    tags: ['rooftop', 'cocktails', 'view'],
    name: "The Rooftop at The Vendue",
    cuisine: "American",
    location: "Vendue Range",
    rating: "⭐⭐⭐⭐⭐",
    description: "Elegant rooftop dining with harbor views and seasonal spring menu.",
    priceRange: "$$$",
    icon: "🌿",
    attendees: 50,
    organizer: { name: "The Vendue Hotel", email: "dining@thevendue.com" },
    photo: "/images/restaurants/vendue-rooftop.png",
    distanceMiles: 0.3,
    area: 'downtown',
    popularityScore: 90
  },
  {
    id: 12,
    type: 'restaurants',
    category: 'casual',
    categoryTags: ['food', 'family'],
    tags: ['biscuits', 'breakfast'],
    name: "Callie's Hot Little Biscuit",
    cuisine: "Southern",
    location: "King Street",
    rating: "⭐⭐⭐⭐",
    description: "Famous for fluffy buttermilk biscuits and spring berry jams.",
    priceRange: "$",
    icon: "🥐",
    attendees: 30,
    organizer: { name: "Callie's Kitchen", email: "info@calliesbiscuit.com" },
    photo: "/images/restaurants/callies-biscuit.png",
    distanceMiles: 0.6,
    area: 'downtown',
    popularityScore: 85
  },
  {
    id: 13,
    type: 'restaurants',
    category: 'outdoor',
    categoryTags: ['food', 'nightlife'],
    tags: ['seafood', 'oyster', 'patio'],
    name: "The Darling Oyster Bar",
    cuisine: "Seafood",
    location: "King Street",
    rating: "⭐⭐⭐⭐⭐",
    description: "Fresh oysters and patio seating perfect for spring evenings.",
    priceRange: "$$$",
    icon: "🦪",
    attendees: 40,
    organizer: { name: "The Darling", email: "reservations@thedarling.com" },
    photo: "/images/restaurants/darling-oyster.png",
    distanceMiles: 0.5,
    area: 'downtown',
    popularityScore: 92
  },
  {
    id: 14,
    type: 'restaurants',
    category: 'casual',
    categoryTags: ['food', 'family'],
    tags: ['comfort food', 'southern'],
    name: "Jestine's Kitchen",
    cuisine: "Southern",
    location: "Meeting Street",
    rating: "⭐⭐⭐⭐",
    description: "Authentic Lowcountry cuisine in a cozy, family-style setting.",
    priceRange: "$$",
    icon: "🍳",
    attendees: 35,
    organizer: { name: "Jestine's Kitchen", email: "info@jestineskitchen.com" },
    photo: "/images/restaurants/jestines-kitchen.png",
    distanceMiles: 0.7,
    area: 'downtown',
    popularityScore: 80
  },

  // Attractions
  {
    id: 21,
    type: 'attractions',
    category: 'outdoor',
    categoryTags: ['outdoors', 'family'],
    tags: ['gardens', 'wildlife'],
    name: "Magnolia Plantation Gardens",
    location: "Ashley River Road",
    description: "America's oldest public garden with stunning spring blooms and wildlife.",
    admission: "$20",
    icon: "🌻",
    attendees: 100,
    organizer: { name: "Magnolia Plantation", email: "info@magnoliaplantation.org" },
    photo: "/images/attractions/magnolia-plantation.png",
    distanceMiles: 9.2,
    area: 'islands',
    popularityScore: 94
  },
  {
    id: 22,
    type: 'attractions',
    category: 'culture',
    categoryTags: ['culture', 'family'],
    tags: ['architecture', 'history'],
    name: "Rainbow Row",
    location: "East Bay Street",
    description: "Iconic pastel-colored historic houses, perfect for spring photography.",
    admission: "Free",
    icon: "🏠",
    attendees: 50,
    organizer: { name: "Charleston Historic Foundation", email: "info@charlestonhistoric.org" },
    photo: "/images/attractions/rainbow-row.png",
    distanceMiles: 0.2,
    area: 'downtown',
    popularityScore: 89
  },
  {
    id: 23,
    type: 'attractions',
    category: 'outdoor',
    categoryTags: ['outdoors', 'family'],
    tags: ['park', 'fountain'],
    name: "Waterfront Park",
    location: "Concord Street",
    description: "Beautiful harbor views with famous pineapple fountain and spring flowers.",
    admission: "Free",
    icon: "⛲",
    attendees: 75,
    organizer: { name: "Charleston Parks Department", email: "parks@charleston.gov" },
    photo: "/images/attractions/waterfront-park.png",
    distanceMiles: 0.4,
    area: 'downtown',
    popularityScore: 91
  },
  {
    id: 24,
    type: 'attractions',
    category: 'culture',
    categoryTags: ['culture', 'family', 'seasonal'],
    tags: ['market', 'shopping'],
    name: "Charleston City Market",
    location: "Market Street",
    description: "Historic market with local crafts, perfect for spring shopping.",
    admission: "Free",
    icon: "🛍️",
    attendees: 120,
    organizer: { name: "Charleston City Market", email: "info@charlestoncitymarket.com" },
    photo: "/images/attractions/city-market.png",
    distanceMiles: 0.3,
    area: 'downtown',
    popularityScore: 97
  },
  {
    id: 25,
    type: 'attractions',
    category: 'outdoor',
    categoryTags: ['outdoors', 'family'],
    tags: ['history', 'plantation'],
    name: "Boone Hall Plantation",
    location: "Mount Pleasant",
    description: "Historic plantation with oak-lined entrance and spring garden tours.",
    admission: "$25",
    icon: "🌳",
    attendees: 60,
    organizer: { name: "Boone Hall Plantation", email: "tours@boonehallplantation.org" },
    photo: "/images/attractions/boone-hall.png",
    distanceMiles: 7.5,
    area: 'islands',
    popularityScore: 87
  }
]);

const createDefaultFilters = () => ({
  categories: [],
  price: 'any',
  date: 'any',
  location: 'all',
  sort: 'popular'
});

const getOptionLabel = (options, id) => options.find(option => option.id === id)?.label;

const parsePriceValue = (item) => {
  if (typeof item.price === 'number') return item.price;

  const valueSource = item.price || item.priceRange || item.admission || '';
  if (!valueSource) return null;

  if (typeof valueSource === 'string') {
    const lower = valueSource.toLowerCase();
    if (lower.includes('free')) return 0;

    const numericMatch = valueSource.match(/(\d+(\.\d+)?)/);
    if (numericMatch) {
      return parseFloat(numericMatch[1]);
    }

    const dollarMatch = valueSource.match(/^\${1,4}$/);
    if (dollarMatch) {
      return priceTierLookup[dollarMatch[0]] || null;
    }
  }

  return null;
};

const getEventDateRange = (item) => {
  if (!item.startDate) return null;
  const start = new Date(item.startDate);
  const end = new Date(item.endDate || item.startDate);
  if (isNaN(start) || isNaN(end)) {
    return null;
  }
  return { start, end };
};

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [savedEvents, setSavedEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isItineraryVisible, setIsItineraryVisible] = useState(false);
  const [filters, setFilters] = useState(createDefaultFilters);
  const [allData] = useState(buildInitialData);
  
  const handleCategoryToggle = (categoryId) => {
    if (categoryId === 'all') {
      setFilters((prev) => ({ ...prev, categories: [] }));
      return;
    }

    setFilters((prev) => {
      const isSelected = prev.categories.includes(categoryId);
      const updatedCategories = isSelected
        ? prev.categories.filter((category) => category !== categoryId)
        : [...prev.categories, categoryId];
      return { ...prev, categories: updatedCategories };
    });
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilter = (type, value) => {
    if (type === 'category') {
      setFilters((prev) => ({
        ...prev,
        categories: prev.categories.filter((category) => category !== value)
      }));
      return;
    }

    const defaults = createDefaultFilters();
    setFilters((prev) => ({ ...prev, [type]: defaults[type] }));
  };

  const handleResetFilters = () => {
    setFilters(createDefaultFilters());
  };

  const filterBySearch = (items, query) => {
    if (!query) return items;
    const lowerQuery = query.toLowerCase();
    return items.filter((item) => {
      const searchableContent = [
        item.name,
        item.description,
        item.location,
        ...(item.categoryTags || []),
        ...(item.tags || [])
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
      return searchableContent.includes(lowerQuery);
    });
  };

  const matchesCategoryFilter = (item) => {
    if (!filters.categories.length) return true;
    const tags = item.categoryTags || [];
    return tags.some((tag) => filters.categories.includes(tag));
  };

  const matchesPriceFilter = (item) => {
    if (filters.price === 'any') return true;
    const value = parsePriceValue(item);
    if (value === null) return false;

    switch (filters.price) {
      case 'free':
        return value === 0;
      case 'under25':
        return value < 25;
      case '25to50':
        return value >= 25 && value <= 50;
      case '50plus':
        return value > 50;
      default:
        return true;
    }
  };

  const matchesDateFilter = (item) => {
    if (filters.date === 'any') return true;
    if (item.type !== 'events') return false;

    const range = getEventDateRange(item);
    if (!range) return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (filters.date === 'today') {
      return range.start <= today && range.end >= today;
    }

    const windowEnd = new Date(today);
    if (filters.date === 'week') {
      windowEnd.setDate(windowEnd.getDate() + 7);
    } else if (filters.date === 'month') {
      windowEnd.setDate(windowEnd.getDate() + 30);
    }

    return range.start <= windowEnd && range.end >= today;
  };

  const matchesLocationFilter = (item) => {
    if (filters.location === 'all') return true;
    const distance = typeof item.distanceMiles === 'number' ? item.distanceMiles : null;

    switch (filters.location) {
      case 'within1':
        return distance !== null && distance <= 1;
      case 'within5':
        return distance !== null && distance <= 5;
      case 'downtown':
        return item.area === 'downtown';
      case 'islands':
        return item.area === 'islands';
      default:
        return true;
    }
  };

  const applySorting = (items) => {
    const sorted = [...items];
    switch (filters.sort) {
      case 'alphabetical':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case 'nearby':
        return sorted.sort(
          (a, b) =>
            (a.distanceMiles ?? Number.POSITIVE_INFINITY) -
            (b.distanceMiles ?? Number.POSITIVE_INFINITY)
        );
      case 'priceLowHigh':
        return sorted.sort(
          (a, b) =>
            (parsePriceValue(a) ?? Number.POSITIVE_INFINITY) -
            (parsePriceValue(b) ?? Number.POSITIVE_INFINITY)
        );
      case 'priceHighLow':
        return sorted.sort(
          (a, b) =>
            (parsePriceValue(b) ?? 0) -
            (parsePriceValue(a) ?? 0)
        );
      case 'dateSoonest':
        return sorted.sort((a, b) => {
          const aRange = getEventDateRange(a);
          const bRange = getEventDateRange(b);
          if (!aRange && !bRange) return 0;
          if (!aRange) return 1;
          if (!bRange) return -1;
          return aRange.start - bRange.start;
        });
      case 'popular':
      default:
        return sorted.sort(
          (a, b) =>
            (b.popularityScore ?? b.attendees ?? 0) -
            (a.popularityScore ?? a.attendees ?? 0)
        );
    }
  };

  const getFilteredEvents = () => {
    const keywordFiltered = filterBySearch(allData, searchQuery);
    const categoryFiltered = keywordFiltered.filter(matchesCategoryFilter);
    const priceFiltered = categoryFiltered.filter(matchesPriceFilter);
    const dateFiltered = priceFiltered.filter(matchesDateFilter);
    const locationFiltered = dateFiltered.filter(matchesLocationFilter);
    return applySorting(locationFiltered);
  };

  const activeFilterChips = [
    ...filters.categories.map((category) => ({
      type: 'category',
      value: category,
      label: getOptionLabel(CATEGORY_FILTERS, category) || category
    })),
    filters.price !== 'any' && {
      type: 'price',
      value: 'price',
      label: getOptionLabel(PRICE_FILTERS, filters.price)
    },
    filters.date !== 'any' && {
      type: 'date',
      value: 'date',
      label: getOptionLabel(DATE_FILTERS, filters.date)
    },
    filters.location !== 'all' && {
      type: 'location',
      value: 'location',
      label: getOptionLabel(LOCATION_FILTERS, filters.location)
    },
    filters.sort !== 'popular' && {
      type: 'sort',
      value: 'sort',
      label: getOptionLabel(SORT_OPTIONS, filters.sort)
    }
  ].filter(Boolean);

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
                  selectedCategories={filters.categories}
                  onToggleCategory={handleCategoryToggle}
                />
                <FiltersPanel 
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onClearFilter={handleClearFilter}
                  onResetFilters={handleResetFilters}
                  activeFilterChips={activeFilterChips}
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