import React from 'react';

const UserStatus = ({ loggedIn, isAdmin }) => {
  const check = () => {
    if (loggedIn && isAdmin) {
      return 'Welcome Admin';
    } else {
      return 'Welcome User';
    }
  };
  const cks = check(loggedIn, isAdmin);
  return (
    <div>
      <h1>{cks}</h1>
    </div>
  );
};

export default UserStatus;
