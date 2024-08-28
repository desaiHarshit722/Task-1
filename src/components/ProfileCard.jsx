import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, image, bio }) => {
  return (
    <div className="profile-card">
      <img src={image} alt="Profile" className="profile-image" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-bio">{bio}</p>
    </div>
  );
};

export default ProfileCard;
