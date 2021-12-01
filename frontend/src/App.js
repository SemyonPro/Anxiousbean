import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Products from './screens/Products'
import Main from './components/Main'
import CartScreen from './screens/CartScreen'
import Footer from './components/Footer'
// import Contact from './screensContact'
// import About from './screens/About'
// import Subscription from './screens/Subscription'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
// import ChooseTaste from './screens/ChooseTaste'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'
import ProductScreen from './screens/ProductScreen'

function App() {
  return (
    <Router>
      <Header />
      <Route path='/' component={Main} exact />
      <Route path='/products' component={Products} />
      <Route path='/order/:id' component={OrderScreen} />
      <Route path='/shipping' component={ShippingScreen} />
      <Route path='/payment' component={PaymentScreen} />
      <Route path='/placeorder' component={PlaceOrderScreen} />
      <Route path='/login' component={LoginScreen} />
      <Route path='/register' component={RegisterScreen} />
      <Route path='/profile' component={ProfileScreen} />
      <Route path='/product/:id' component={ProductScreen} />
      <Route path='/cart/:id?' component={CartScreen} />
      <Route path='/admin/userlist' component={UserListScreen} />
      <Route path='/admin/user/:id/edit' component={UserEditScreen} />
      <Route path='/admin/productlist' component={ProductListScreen} exact />
      <Route
        path='/admin/productlist/:pageNumber'
        component={ProductListScreen}
        exact
      />
      <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
      <Route path='/admin/orderlist' component={OrderListScreen} />
      <Route path='/search/:keyword' component={Main} exact />
      <Route path='/page/:pageNumber' component={Main} exact />
      <Route path='/search/:keyword/page/:pageNumber' component={Main} exact />
      <Footer />
    </Router>
  )
}

export default App
