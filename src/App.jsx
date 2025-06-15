// import { useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

//Import All Components
import Home from './component/Home/Home'
import About from './component/About/About'
import Faq from './component/Faq/Faq'
import Contact from './component/Contact/Contact'
import TermsConditions from './component/Terms-conditions/Terms-conditions'
import NotFound from './component/NotFound/NotFound'
import Wishlist from './component/WIshlist/Wishlist'
import Blog from './component/Blog/Blog'
import BlogSpot from './component/Blog/BlogSpot'
import Register from './component/Authentication/Register/Register'
import Login from './component/Authentication/Login/Login'
import Collection from './component/Collection/Collection'
import Shop from './component/Shop/Shop'
import Cart from './component/Cart/Cart'
import ProductDetails from './component/ProductDetails/ProductDetails'
import { ToastContainer } from 'react-toastify'
import CreateProduct from './component/Admin/CreateProduct/CreateProduct';
import Products from './component/Admin/Products/Products';
import AdminViewProduct from './component/Admin/Products/ViewProduct';
import Users from './component/Admin/Users/Users';
import UserDetails from './component/Admin/Users/UserDetails';
import LoginAdmin from './component/Admin/Authentication/Login';
import RegisterAdmin from './component/Admin/Authentication/Register';
import CheckoutSuccess from './component/CheckoutSuccess/CheckoutSuccess';
import Orders from './component/Admin/Orders/Orders';
import OrderDetails from './component/Admin/Orders/OrderDetails';
import Overview from './component/Admin/Overview/Overview';


function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Faq' element={<Faq/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/terms-conditions' element={<TermsConditions/>}/>
          <Route path="*" element={<NotFound />} />
          <Route path="/Wishlist" element={<Wishlist/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/Blog-Spot/:id" element={<BlogSpot/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Collection" element={<Collection/>} />
          <Route path="/Shop" element={<Shop/>} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/one-product/:id" element={<ProductDetails/>} />
          <Route path="/Admin-create-product" element={<CreateProduct/>} />
          <Route path="/Admin-products" element={<Products/>} />
          <Route path="/Admin-users" element={<Users/>} />
          <Route path="/Admin-user/:id" element={<UserDetails/>} />
          <Route path="/AdminViewProduct/:id" element={<AdminViewProduct/>} />
          <Route path="/Admin-auth" element={<LoginAdmin/>} />
          <Route path="/Admin-register" element={<RegisterAdmin/>} />
          <Route path="checkout-success" element={<CheckoutSuccess/>} />
          <Route path="/Admin-Orders" element={<Orders/>} />
          <Route path="/Admin-order-details/:id" element={<OrderDetails/>} />
          <Route path="/Overview" element={<Overview/>} />



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
