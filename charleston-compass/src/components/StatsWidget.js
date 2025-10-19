import React from 'react';

const StatsWidget = ({ stats }) => {
  return (
    <div className="widget">
      <h3>📊 Your Stats</h3>
      <div className="stats-grid">
        <div className="stat">
          <div className="stat-number">{stats.events}</div>
          <div className="stat-label">Events</div>
        </div>
        <div className="stat">
          <div className="stat-number">{stats.restaurants}</div>
          <div className="stat-label">Restaurants</div>
        </div>
      </div>
    </div>
  );
};

export default StatsWidget;
