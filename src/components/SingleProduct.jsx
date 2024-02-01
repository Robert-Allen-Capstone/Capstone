import React from "react";
import { useState, useEffect } from "react";
import { getSingleProduct } from "../API";
import { useNavigate, useParams } from "react-router-dom";


export default function Product ({ setCart }) {
    const [ product, setProduct ] = useState([]);
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function fetchProduct () {
            try {
                const nextProduct = await getSingleProduct(params.id);
                setProduct(nextProduct);
                console.log(nextProduct);
            } catch (err){
                console.log(err);
            }
        } 
        
        fetchProduct();
    }, []);

        // function formatPrice(price) {
        //     console.log("price", price);
        //     console.log("singleProduct", singleProduct);
        //     if (singleProduct) {
        //         const roundedPrice = price.toFixed(2);
        //         return roundedPrice;
        //     }
        // }

        function addItemToCart() {
            let cartInStorage = JSON.parse(localStorage.getItem("cart"));
            if (!cartInStorage) cartInStorage = [];
            const result = cartInStorage.find((item) => item.id == params.id);
            if (!result) {
                cartInStorage.push({ ...product, quantity: 1 }); 
                localStorage.setItem("cart", JSON.stringify(cartInStorage));
            } else {
                result.quantity += 1;
                const updatedCart = cartInStorage.filter((item) => item.id != params.id);
                updatedCart.push(result);
                localStorage.setItem("cart", JSON.stringify(updatedCart));
            }   
            const nextCart = JSON.parse(localStorage.getItem("cart"));
            setCart(nextCart);
            }
        


                return ( product &&
                    <div className="product-single" onClick={() => navigate(`/products/${product.id}`)}>
                        <h4>{product.title}</h4>
                        <img width={250} src={product.image} />
                        <p>Category: {product.category}</p>
                        <p>Description: {product.description}</p>
                        <p>Id: {product.id}</p>
                        <p>Price: {product.price}</p>
                        <button onClick={addItemToCart}>Add to Cart</button>

                    </div>
                );
}
    
     

