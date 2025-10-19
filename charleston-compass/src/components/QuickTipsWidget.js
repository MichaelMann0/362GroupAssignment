import React from 'react';

const QuickTipsWidget = () => {
  const tips = [
    '🌸 Visit gardens in early morning for best photos',
    '🚶‍♀️ Perfect weather for walking tours',
    '🍃 Try rooftop dining for spring breezes',
    '📸 Golden hour starts around 6:30 PM'
  ];

  return (
    <div className="widget quick-tips">
      <h3>💡 Spring Tips</h3>
      {tips.map((tip, index) => (
        <div key={index} className="tip">
          {tip}
        </div>
      ))}
    </div>
  );
};

export default QuickTipsWidget;
