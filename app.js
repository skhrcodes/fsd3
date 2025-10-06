// src/App.js

import React from 'react';
import UserProfileCard from './UserProfileCard';
import ActivityFeed from './ActivityFeed';
import { userData, activityData } from './data';
import './ProfileDashboard.css'; // Import the CSS file

const App = () => {
  return (
    <div className="dashboard-container">
      <h1>User Profile Dashboard</h1>
      <div className="dashboard-layout">
        
        {/* Left Column: User Profile Card */}
        <div className="dashboard-profile-section">
          <UserProfileCard user={userData} />
        </div>
        
        {/* Right Column: Activity Feed */}
        <div className="dashboard-activity-section">
          <ActivityFeed activities={activityData} />
        </div>
      
      </div>
    </div>
  );
};

export default App;
