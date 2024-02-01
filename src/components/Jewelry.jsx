import React from "react";
import { useState, useEffect } from "react";
import { getAllJewelry } from "../API";
import { useNavigate } from "react-router-dom";


export default function Jewelry() {
    const [jewelry, setJewelry] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        async function getJewelryData() {
            try {
                const products = await getAllJewelry();
                setJewelry(products);
            } catch (err) {
                console.log(err);
            }
        }
        getJewelryData();
    }, []);

    return ( <div className="product-container">


    {jewelry.map((product, index) => {
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
//         <div className="products-list">
//         {jewelry.map((item) => {
//             <ProductLink key={item.id} product={item} />
//         })}
//         </div>
//     };
// }