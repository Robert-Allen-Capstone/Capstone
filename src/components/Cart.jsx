import React from "react";
import { useNavigate } from "react-router-dom"
import { getSingleCart } from '../API'
import cartLogo from '../assets/cartLogo.png'
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { getSingleProduct } from '../API'
import CheckoutForm from "./CheckoutForm";

export default function Cart ({cart, setCart }) {
    const navigate = useNavigate();
    const calculateTotal = () => {
        let total = 0;
        for (const item of cart) {
            console.log(item);
            total += item.price * item.quantity;
        }
        return total;
    };

    async function deleteItemFromCart(product) {
        try {
            const updatedCart = cart.filter((item) => item.id !== product.id);
            setCart(updatedCart);

            localStorage.setItem("cart", JSON.stringify(updatedCart));
        }   catch (err) {
            console.error("Error deleting item", err);
        }
    }

    // function beginCheckout() {
    //     navigate("/checkout");
    // }

    // function formatPrice(price) {
    //     const roundedPrice = price.toFixed(2);
    //     return roundedPrice;
    // }

    // function totalPrice(product) {

    // }
   
    return (
        <div id='cart'>
        <div className="product-container">


{cart.map((product, index) => {
    return (
        
        <div className="product-info" key={index} 
        // onClick={() => navigate(`/products/${product.id}`)}
        >
            
            <h5>{product.title}</h5>
            <img src={product.image} />
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>
            <p>Id: {product.id}</p>
            <p>Price: {product.price}</p>
            <div className='remove-button'>
                <button onClick={() => deleteItemFromCart(product)}>
                    Remove
                </button>

            </div>
            </div>

        
    );
})}
<div className="total-container">Total: ${calculateTotal()} </div>
<div>
    <button onClick={() => navigate(`/checkout`)}>Check Out</button>
</div>
</div>
        </div>
    );
}  