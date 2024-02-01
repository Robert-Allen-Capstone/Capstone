import { useState } from "react";
import { loginUser } from "../API";
import { Link, useNavigate } from "react-router-dom";
import { getAllUsers } from "../API";

export default function Login ({ setToken, setUser }) {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userObj = {
            username,
            password
        }
        const nextToken = await loginUser(userObj);
        const users = await getAllUsers();
        const user = users.filter(_user => {
            return _user.username === username;
        }) [0]

        console.log(user)

        localStorage.setItem("username", JSON.stringify(user))
        localStorage.setItem("token", JSON.stringify(nextToken))
    
        setUser(user);
        setToken(nextToken);
        navigate("/account");

    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Username: <input value={username} onChange={(event) => setUsername(event.target.value)} /></label>
            <label>Password: <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} /></label>
            <button>Login</button>
        </form>
        <Link to="/register" >Not a member? Click here to join!</Link>
        </>
    )

}