import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/pages/Products';
import Cart from './components/pages/Cart';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/products" exact>
          <Products/>
        </Route>
        <Route path="/about" exact>
          {/* <About/> */}
        </Route>
        <Route path="/contact" exact><Contact/></Route>
        <Route path="/shipping" exact>
          {/* <Shipping/> */}
        </Route>
        <Route path="/subscription" exact>
          {/* <Subscription/> */}
        </Route>
        <Route path="/choosetaste" exact>
          {/* <ChooseTaste/> */}
        </Route>
        <Route path="/cart" exact>
          <Cart/>
        </Route>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
