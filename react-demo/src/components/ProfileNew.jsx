import React, { useState } from 'react';

const ProfileNew = () => {
  const [profile, setProfile] = useState({
    name: '',
    age: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div>
      <h1>Profile Information</h1>

      <label>
        Name:
        <input
          name='name'
          type='text'
          value={profile.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Age:
        <input
          name='age'
          type='number'
          value={profile.age}
          onChange={handleChange}
        />
      </label>

      <div>
        <p>Name: {profile.name}</p>
        <p>age: {profile.age}</p>
      </div>
    </div>
  );
};

export default ProfileNew;
