import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Account from './components/Account';
import Login from './components/Login';
import Register from './components/Register';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import Navigation from './components/Navigation';
import Jewelry from './components/Jewelry';
import Electronics from './components/Electronics';
import MensClothing from './components/MensClothing';
import WomensClothing from "./components/WomensClothing";
import Sort from './components/Sort';
import CheckoutForm from './components/CheckoutForm';
import Thanks from './components/Thanks';
// import Searchbar from './components/SearchBar';
import { Routes, Route, Link } from 'react-router-dom';
import Cart from './components/Cart';
import { getProducts, getSingleCart, getSingleProduct } from './API';




function App() {
  const [ user, setUser ] = useState(null)
  const [token, setToken] = useState(null)
  const [ cart, setCart ] = useState([])
  const [ products, setProducts ] = useState([]);
  const [ sortOrder, setSortOrder ] = useState("asc");
  const localToken = localStorage.getItem("token")
  const localUser = localStorage.getItem("username")
  const navigate = useNavigate();
  
  async function fetchProducts () {
    try {
        const nextProducts = await getProducts();
        setProducts(nextProducts);
        console.log(nextProducts);
    } catch (err){
        console.log(err);
    }
} 
  
  useEffect (() => { if (localToken) {
    setToken(localToken)
  }
  if (localUser) {
    setUser(JSON.parse(localUser))
  }}, [])

  
  useEffect(() => {
   
      const fetchCart = async () => {
        if(!user) {
          setCart([]);
          return;
        }
        let localCart = localStorage.getItem("cart");
        console.log(localCart);
        if (localCart) {
          localCart = JSON.parse(localCart);
         } 
        if (user && !localCart) {
          const _cart = await getSingleCart (user?.id);
          
          const cartItems = await Promise.all (_cart[0].products.map(item => getSingleProduct(item.productId)));
          for (const item of cartItems) {
            item.quantity= 1;
          }
          localCart= cartItems;
        }
         
          
            setCart (localCart);
            localStorage.setItem("cart", JSON.stringify(localCart));
            // console.log(cartItems);
          
      }
   
    fetchCart();
  }, [user]);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken !== undefined) setToken(localToken);
  }, []);

  return (
      <>
      
      
      
        <Navigation
        token={token}
        setToken={setToken}
        user={user}
        setUser={setUser}
        cartCount={cart?.length}
        productData={products}
        setProducts={setProducts}
        fetchProducts={fetchProducts}
        />

        <div id='sort-container'><label htmlFor="sort">Sort</label>
        <select name='sort' onChange={(e) => {
          setSortOrder(e.target.value)
          if(e.target.value === "asc") {
            navigate("/")
            return
          }
          navigate("/products/sort")
          }} value={sortOrder}>
          
          <option value={"asc"}>Ascending</option>
          <option value={"desc"}>Descending</option>
          </select></div>
    

      <Routes>
        <Route path="/" element={<Products products={products} setProducts={setProducts} fetchProducts={fetchProducts}/>} />
        <Route path="/login" element={<Login setToken={setToken} setUser={setUser} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route path="/account" element={<Account token={token} />} />
        <Route path="/cart" element={<Cart user={user} cart={cart} setCart={setCart} />} />
        <Route path="/products/:id" element={<SingleProduct setCart={setCart} />} />
        <Route path="/products/electronics" element={<Electronics products={products} setProducts={setProducts}/>} />
        <Route path="/products/jewelry" element={<Jewelry />} />
        <Route path="/products/mensclothing" element={<MensClothing />} />
        <Route path="/products/womensclothing" element={<WomensClothing />} />
        <Route path='/products/sort' element={<Sort products={products} setProducts={setProducts} sortOrder={sortOrder}/>} />
        <Route path='/Checkout' element={<CheckoutForm />} />
        <Route path='/Thanks' element={<Thanks />} />
      </Routes>

    </>
  );
}

export default App
