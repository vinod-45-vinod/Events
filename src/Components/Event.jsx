// src/Components/Events.jsx

import React from 'react';
import './Events.css'; // Import the Events page CSS

function Event() {
  return (
    <div className="events-page">
      <h1 className="events-title">Events Page</h1>
      <div className="events-container">
        <div className="event-item">
          <h2>Event 1: Music Concert</h2>
          <p>Location: City Arena</p>
          <p>Date: January 15, 2024</p>
          <p>Time: 7:00 PM</p>
        </div>
        <div className="event-item">
          <h2>Event 2: Art Exhibition</h2>
          <p>Location: Modern Art Gallery</p>
          <p>Date: February 10, 2024</p>
          <p>Time: 5:00 PM</p>
        </div>
        <div className="event-item">
          <h2>Event 3: Charity Run</h2>
          <p>Location: Central Park</p>
          <p>Date: March 20, 2024</p>
          <p>Time: 9:00 AM</p>
        </div>
      </div>
    </div>
  );
}

export default Event;
