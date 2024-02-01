import { useState, useEffect } from "react";
import { registerUser } from "../API";
import { Link, useNavigate } from 'react-router-dom';

export default function Register ({ setToken }) {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ username, setUsername ] = useState("");

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
            
        }
        const nextToken = await registerUser(userObj);
        setToken(nextToken);
        navigate("/account");
    }
    
    return (
        <>
       
        <form onSubmit={handleSubmit}>
            <label>First Name: <input value={firstName} onChange={(event) => setFirstName(event.target.value)} /></label>
            <label>Last Name: <input value={lastName} onChange={(event) => setLastName(event.target.value)} /></label>
            <label>E-mail: <input value={email} onChange={(event) => setEmail(event.target.value)} /></label>
            <label>Username: <input value={username} onChange={(event) => setUsername(event.target.value)} /></label>
            <label>Password: <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} /></label>
            <button>Register</button>
        </form>
        <Link to="/login" >Already an account holder? Click here to sign-in!</Link>
        </>
    );

}