import { useState, useEffect } from 'react'
import Account from './components/Account'
import Login from './components/Login'
import Register from './components/Register'
import Products from './components/Products'
import SingleProduct from './components/SingleProduct'
import Navigation from './components/Navigation'
import { Routes, Route, Link } from 'react-router-dom'
import Cart from './components/Cart'
import { getSingleCart, getSingleProduct } from './API'




function App() {
  const [token, setToken] = useState(null)
  const [ user, setUser ] = useState(null)

  const [ cart, setCart ] = useState([]);
  useEffect(() => {
      const fetchCart = async () => {
          const _cart = await getSingleCart (user.id);
          const cartItems = await Promise.all (_cart[0].products.map(item => getSingleProduct(item.productId)));
          setCart (cartItems);
          console.log(cartItems);
      }
      fetchCart()
  }, [user]);

  // useEffect(() => {
  //   const localToken = localStorage.getItem("token");
  //   if (localToken !== undefined) setToken(localToken);
  // }, []);

  return (
      <>
      
      
      
        <Navigation cartCount={cart.length}/>
    

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login setToken={setToken} setUser={setUser} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/account" element={<Account token={token} />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart user={user} cart={cart} />} />
      </Routes>

    </>
  );
}

export default App
