import React from 'react';
import ItineraryWidget from './ItineraryWidget';
import WeatherWidget from './WeatherWidget';
import QuickTipsWidget from './QuickTipsWidget';
import StatsWidget from './StatsWidget';

const Sidebar = ({ itinerary, removeFromItinerary, clearItinerary, stats }) => {
  return (
    <div className="sidebar">
      <WeatherWidget />
      <ItineraryWidget 
        itinerary={itinerary}
        removeFromItinerary={removeFromItinerary}
        clearItinerary={clearItinerary}
      />
      <QuickTipsWidget />
      <StatsWidget stats={stats} />
    </div>
  );
};

export default Sidebar;
