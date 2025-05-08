import React, { createCont } from 'react';
import ComponentA from './Components/ComponentA';
import UserProfile from './Components/UserProfile';
import { UserProvider } from './Components/UserContext';
import UpdateUser from './Components/UpdateUser';
export const Data = createContext();
export const Data1 = createContext();

const App = () => {
  return (
    <UserProvider>
      <UserProfile />
      <UpdateUser />
    </UserProvider>
  );
};

export default App;
