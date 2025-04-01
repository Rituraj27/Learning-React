import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
import WelcomeMsd from './components/WelcomeMsd';
import JsxRules from './components/JsxRules';
import Greeting from './components/Greeting';
import ProductInfo from './components/ProductInfo';
import UserList from './components/UserList';
import ProductList from './components/ProductList';
import Person from './components/Person';
import Product from './components/Product';
import Card from './components/Card/Card';
import Weather from './components/Weather';
import UserStatus from './components/UserStatus';
import { useState } from 'react';

// const ValidPassword = () => <h1>Valid Password</h1>;
// const InvalidPassword = () => <h1>InValid Password</h1>;

// const Check = ({ isValid }) => {
//   return isValid ? <ValidPassword /> : <InvalidPassword />;
// };

const App = () => {
  const [friends, setfriends] = useState(['Alex', 'Shima']);

  const addFriend = () => {
    setfriends([...friends, 'Shiya']);
  };
  const rmFriend = () => {
    setfriends(friends.filter((friend) => friend !== 'Alex'));
  };
  const upFriend = () => {
    setfriends(friends.map((f) => (f === 'Shiya' ? 'Shiya Kuwor' : f)));
  };
  return (
    <div>
      {friends.map((f) => (
        <ul key={Math.random()}>
          <li>{f}</li>
        </ul>
      ))}

      <button onClick={addFriend}>Add Friend</button>
      <button onClick={rmFriend}>Remove Friend</button>
      <button onClick={upFriend}>Update Friend</button>
    </div>
  );
};

export default App;
