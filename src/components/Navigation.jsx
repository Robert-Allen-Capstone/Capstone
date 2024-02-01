import React from "react";
import { Link } from "react-router-dom";
import mdbLogo from '../assets/mdbLogo.png';
import cartLogo from '../assets/cartLogo.png';
import Searchbar from "./SearchBar";
// import Electronics from "./Electronics";
// import Jewelry from "./Jewelry";
// import MensClothing from "./MensClothing";
// import WomensClothing from "./WomensClothing";
import { useState } from "react"

export default function Navigation({ token, setToken, setUser, cartCount, setProducts, productData, fetchProducts }) {
    const [search, setSearch] = useState("");
    console.log(productData)
    
    return (
        <div>
        <div className="navbar" id='site-title'>
        <Link to={"/"}
                onClick={() => {
                    fetchProducts();
                    setSearch("");
                }}
                >
        <img id='logo-image' src={mdbLogo} alt=""/>
        </Link>

        <Searchbar
        setProducts={setProducts}
        search={search}
        setSearch={setSearch}
        productData={productData}
        // fetchProducts={fetchProducts}
        />

      
  
      
      <span>
            <Link to="/account"> Account </Link>
            {!token && <Link to="/login"> Login </Link>}
            {token && (
                <Link
                to="/login"
                onClick={() => {
                    setUser(null);
                    localStorage.removeItem("token");
                    localStorage.removeItem("username"); 
                    setToken(null);
                }}
                >
                    Logout
                </Link>
            )}
            <Link to="/register"> Register </Link>
            <Link to="/cart" style={{position:"relative"}}> <img src={cartLogo}    width={"50px"} alt="cart" />
            <span className="cart-length"  >
                {cartCount}
            </span>
            </Link>
            
            </span>
            
      </div>
      <div className="categories">
        <Link to={"/products/electronics"}>Electronics</Link>
        <Link to={"/products/jewelry"}>Jewelry</Link>
        <Link to={"/products/mensclothing"}>Men's Clothing</Link>
        <Link to={"/products/womensclothing"}>Women's Clothing</Link>
      </div>
      </div>
    );
}