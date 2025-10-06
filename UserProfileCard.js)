// src/UserProfileCard.js

import React from 'react';

const UserProfileCard = ({ user }) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        <img 
          src={user.profilePicture} 
          alt={`${user.name}'s profile`} 
          className="profile-pic"
        />
        <h2>{user.name}</h2>
        <p className="user-title">{user.title}</p>
      </div>
      
      <div className="profile-details">
        <h3>About</h3>
        <p>{user.bio}</p>
        
        <h3>Contact</h3>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>
    </div>
  );
};

export default UserProfileCard;
