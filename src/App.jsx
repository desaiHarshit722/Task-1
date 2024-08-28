import React, { useState } from 'react';
import ProfileCard from './components/ProfileCard';
import ProfileForm from './components/ProfileForm';
import './App.css';

const App = () => {
  const [profileData, setProfileData] = useState({
    name: 'Default Profile Name',
    image: 'https://via.placeholder.com/150',
    bio: 'This is your bio',
  });

  const handleFormSubmit = (data) => {
    setProfileData(data);
  };

  return (
    <div className="app-container">
      <h1>User Profile Card</h1>
      <ProfileCard {...profileData} />
      <ProfileForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
