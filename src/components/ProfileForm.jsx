import React, { useState } from 'react';
import './ProfileForm.css';

const ProfileForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [bio, setBio] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, image: image || 'https://via.placeholder.com/150', bio });
    setName('');
    setImage(null);
    setBio('');
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Profile Picture:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Bio:</label>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        />
      </div>
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default ProfileForm;
