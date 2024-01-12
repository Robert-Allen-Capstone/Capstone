import { useState, useEffect } from "react";
import { getProducts } from "../API";
import { useNavigate } from "react-router-dom";


export default function Products () {
    const [ products, setProducts ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchProducts () {
            try {
                const nextProducts = await getProducts();
                setProducts(nextProducts);
                console.log(nextProducts);
            } catch (err){
                console.log(err);
            }
        } 
        
        fetchProducts();
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