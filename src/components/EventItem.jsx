import React from "react";

const EventItem = ({ key, category, title, description, day, month, time }) => {
  return (
    <div key={key} className="events-container">
      <div className="event-card">
        <div className="date-container">
          <p className="time">{time}</p>
          <div className="when-container">
            <p className="day">{day}</p>
            <p className="month">{month}</p>
          </div>
        </div>
        <div className="event-content">
          <p className="category">{category}</p>
          <p className="title">{title}</p>
          <p className="desc">{description.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
