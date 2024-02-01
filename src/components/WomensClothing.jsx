import React from "react";
import { useState, useEffect } from "react";
import { getAllWomensClothing } from "../API";
import { useNavigate } from "react-router-dom";


export default function WomensClothing() {
    const [womensClothing, setWomensClothing] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        async function getWomensClothingData() {
            try {
                const products = await getAllWomensClothing();
                setWomensClothing(products);
            } catch (err) {
                console.log(err);
            }
        }
        getWomensClothingData();
    }, []);

    return ( <div className="product-container">


    {womensClothing.map((product, index) => {
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