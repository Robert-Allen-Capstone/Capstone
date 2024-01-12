import { useState, useEffect } from "react";
import { getSingleProduct } from "../API";
import { useNavigate, useParams } from "react-router-dom";


export default function Product () {
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


                return ( product &&
                    <div className="product-single" onClick={() => navigate(`/products/${product.id}`)}>
                        <h4>{product.title}</h4>
                        <img width={250} src={product.image} />
                        <p>Category: {product.category}</p>
                        <p>Description: {product.description}</p>
                        <p>Id: {product.id}</p>
                        <p>Price: {product.price}</p>
                        <button className="product-add-button">Add to Cart</button>

                    </div>
                )
         

}