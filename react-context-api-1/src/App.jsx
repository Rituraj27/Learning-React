import Login from './Component/Login';
import Profile from './Component/Profile';
import UserContextProvider from './Context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <p className='bg-red-600 text-center'>User Context Example</p>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
