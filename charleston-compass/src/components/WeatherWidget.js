import React from 'react';

const WeatherWidget = () => {
  return (
    <div className="widget weather-widget">
      <h3>🌤️ Charleston Weather</h3>
      <div className="weather-temp">75°F</div>
      <p>Perfect spring day!</p>
      <p style={{ fontSize: '14px', color: '#7f8c8d' }}>
        Partly cloudy with gentle breeze
      </p>
    </div>
  );
};

export default WeatherWidget;
