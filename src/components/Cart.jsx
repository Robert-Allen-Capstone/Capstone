import { getSingleCart } from '../API'
import cartLogo from '../assets/cartLogo.png'
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { getSingleProduct } from '../API'

export default function Cart ({cart}) {
   
    return (
        <div id='cart'>
        <div className="product-container">


{cart.map((product, index) => {
    return (
        
        <div className="product-info" key={index} onClick={() => navigate(`/products/${product.id}`)}>
            
            <h5>{product.title}</h5>
            <img src={product.image} />
            <p>Category: {product.category}</p>
            <p>Description: {product.description}</p>
            <p>Id: {product.id}</p>
            <p>Price: {product.price}</p>

            </div>

        
    )
})}
</div>
        </div>
    )
}  