import { useState } from 'react';
import { useNavigate } from "react-router-dom";
export default function CheckoutForm() {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ streetNumber, setStreetNumber ] = useState("");
    const [ street, setStreet ] = useState("");
    const [ city, setCity ] = useState("");
    const [ state, setState ] = useState("");
    const [ zipcode, setZipcode ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ cardnumber, setCardNumber ] = useState("");
    const [ expirationdate, setExpirationDate ] = useState("");
    const [ securitycode, setSecurityCode ] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userObj = {
            name:{
            firstName,
            lastName,
            },
            email,
            username,
            password,
            address: {
                streetNumber,
                street,
                city,
                state,
                zipcode,
            }
            
            
        }
};
return (
    
   
    <form onSubmit={handleSubmit}>
        <div className='checkout-form'>
        <label>First Name: <input value={firstName} onChange={(event) => setFirstName(event.target.value)} /></label>
        <label>Last Name: <input value={lastName} onChange={(event) => setLastName(event.target.value)} /></label>
        <label>E-mail: <input value={email} onChange={(event) => setEmail(event.target.value)} /></label>
        <label>Street Number: <input value={streetNumber} onChange={(event) => setStreetNumber(event.target.value)} /></label>
        <label>Street: <input value={street} onChange={(event) => setStreet(event.target.value)} /></label>
        <label>City: <input value={city} onChange={(event) => setCity(event.target.value)} /></label>
        <label>State: <input value={state} onChange={(event) => setState(event.target.value)} /></label>
        <label>Phone: <input value={phone} onChange={(event) => setPhone(event.target.value)} /></label>
        <label>Creditcard: <input value={cardnumber} onChange={(event) => setCardNumber(event.target.value)} /></label>
        <label>Expiration Date: <input value={expirationdate} onChange={(event) => setExpirationDate(event.target.value)} /></label>
        <label>Security Code: <input value={securitycode} onChange={(event) => setSecurityCode(event.target.value)} /></label>
        </div>
        <div className="checkout-button">
            <button onClick={() => navigate(`/thanks`)}>Check Out</button>
        </div>
    </form>

    
);

}