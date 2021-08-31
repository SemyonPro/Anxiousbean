import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import ProductsList from './components/pages/Products';
import Cart from './components/pages/Cart';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Subscription from './components/pages/Subscription';
import Login from './components/pages/Login.js';
import SignUp from './components/pages/Signup';
import ChooseTaste from './components/pages/ChooseTaste';
import Profile from './components/auth/Profile'
import Dashboard from './components/auth/Dashboard'
import ProtectedRoutes from "./components/auth/ProtectedRoutes";
import ProductScreen from './components/pages/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" component={Main} exact />
      <ProtectedRoutes path="/profile" component={Profile} />
      <ProtectedRoutes path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Login} exact />
      <Route path="/product/:id" component={ProductScreen} exact />
      <Route path="/signup" component={SignUp} exact />
      <Route path="/products" component={ProductsList} exact />
      <Route path="/about" component={About} exact />
      <Route path="/contact" component={Contact} exact />
      <Route path="/subscription" component={Subscription} exact />
      <Route path="/choosetaste" component={ChooseTaste} exact />
      <Route path="/cart" component={Cart} exact />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
