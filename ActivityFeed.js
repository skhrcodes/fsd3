// src/ActivityFeed.js

import React from 'react';

const ActivityFeed = ({ activities }) => {
  // Helper to determine the icon based on activity type
  const getActivityIcon = (type) => {
    switch (type) {
      case 'post':
        return '✍️'; // Pen/Pencil
      case 'comment':
        return '💬'; // Speech Bubble
      case 'like':
        return '👍'; // Thumbs up
      default:
        return '📋'; // Clipboard
    }
  };

  return (
    <div className="activity-feed">
      <h2>Recent Activities</h2>
      <ul className="activity-list">
        {activities.map(activity => (
          <li key={activity.id} className={`activity-item ${activity.type}`}>
            <span className="activity-icon">{getActivityIcon(activity.type)}</span>
            <div className="activity-content">
                <p>{activity.content}</p>
                <span className="activity-timestamp">
                    {activity.timestamp}
                </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
