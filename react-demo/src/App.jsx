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
import Counter from './Counter';
import TodoList from './components/TodoList';
import RandomNumber from './components/RandomNumber';
import ProfileNew from './components/ProfileNew';
import ShoopingList from './components/ShoopingList';

// const ValidPassword = () => <h1>Valid Password</h1>;
// const InvalidPassword = () => <h1>InValid Password</h1>;

// const Check = ({ isValid }) => {
//   return isValid ? <ValidPassword /> : <InvalidPassword />;
// };

const App = () => {
  return (
    <div>
      <ShoopingList />
    </div>
  );
};

export default App;
