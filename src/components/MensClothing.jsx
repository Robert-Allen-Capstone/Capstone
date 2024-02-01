import React from "react";
import { useState, useEffect } from "react";
import { getAllMensClothing } from "../API";
import { useNavigate } from "react-router-dom";


export default function mensClothing() {
    const [mensClothing, setMensClothing] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        async function getMensClothingData() {
            try {
                const products = await getAllMensClothing();
                setMensClothing(products);
            } catch (err) {
                console.log(err);
            }
        }
        getMensClothingData();
    }, []);

    return ( <div className="product-container">


    {mensClothing.map((product, index) => {
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