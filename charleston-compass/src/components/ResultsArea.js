import React from 'react';
import ResultCard from './ResultCard';

const ResultsArea = ({ items, addToItinerary, itinerary }) => {
  if (items.length === 0) {
    return (
      <div className="loading">
        No items found matching your criteria
      </div>
    );
  }

  return (
    <div id="results-area">
      {items.map((item, index) => (
        <ResultCard
          key={item.id}
          item={item}
          addToItinerary={addToItinerary}
          itinerary={itinerary}
          index={index}
        />
      ))}
    </div>
  );
};

export default ResultsArea;
