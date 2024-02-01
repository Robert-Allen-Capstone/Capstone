import { useState, useEffect } from "react";
import React from "react";
import { getProducts } from "../API";
import { useNavigate } from "react-router-dom";
import { getProductAscending } from "../API";
import { getProductDescending } from "../API";

export default function Sort ({products, setProducts }) {
    // const [ products, setProducts ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchProductDescending() {
            try {
                const products = await getProductDescending();
                setProducts(products);
            } catch (err) {
                console.log(err);
            }
        }
        fetchProductDescending();
    }, []);

    return (
        <div className="product-container">


            {products.map((product, index) => {
                return (
                    
                    <div className="product-info" key={index} onClick={() => navigate(`/products/${product.id}`)}>
                        
                        <h5>{product.title}</h5>
                        <img src={product.image} />
                        <p>Category: {product.category}</p>
                        <p>Description: {product.description}</p>
                        <p>Id: {product.id}</p>
                        <p>Price: {product.price}</p>
                        <button className="product-add-button">Add to Cart</button>

                        </div>

                    
                )
            })}
        </div>
    );
        }
