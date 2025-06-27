import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <span className='bg-red-500'>Please Login</span>;

  return (
    <div>
      <h1>username: {user.username}</h1>
      <h1>password: {user.password}</h1>
    </div>
  );
};

export default Profile;
