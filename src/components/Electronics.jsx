import React from "react";
import { useState, useEffect } from "react";
import { getAllElectronics } from "../API";
import { useNavigate } from "react-router-dom";


export default function Electronics({products, setProducts}) {
    // const [electronics, setElectronics] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        async function getElectronicsData() {
            try {
                const eproducts = await getAllElectronics();
                // setElectronics(products);
                setProducts(eproducts);
            } catch (err) {
                console.log(err);
            }
        }
        getElectronicsData();
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
                    <button className="product-add-button">See Details</button>

                    </div>

                
            )
        })}
    </div>
    );
}

//     return {
//         <div
//         className="products-list">
//         {electronics.map((item) => {
//             <ProductLink key={item.id} product={item} />
//         })}
//         </div>
//     };
// }