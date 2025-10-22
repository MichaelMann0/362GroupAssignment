import React from 'react';
import EventCard from './EventCard';
import './EventGrid.css';

const EventGrid = ({ events, onSaveEvent, onViewDetails, savedEvents }) => {
  if (events.length === 0) {
    return (
      <div className="no-events">
        <div className="no-events-content">
          <div className="no-events-icon">🔍</div>
          <h3>No events found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      </div>
    );
  }

  return (
    <div className="event-grid">
      {events.map((event) => (
        <EventCard
          key={event.id}
          event={event}
          onSave={onSaveEvent}
          onViewDetails={onViewDetails}
          isSaved={savedEvents.some(saved => saved.id === event.id)}
        />
      ))}
    </div>
  );
};

export default EventGrid;
