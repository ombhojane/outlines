// components/Calendar.js
import React, { useState } from 'react';

const Calendar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`calendar ${isOpen ? 'open' : ''}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Your calendar content goes here */}
      {/* For simplicity, let's just show a static message */}
      <p>Select a date</p>
    </div>
  );
};

export default Calendar;
