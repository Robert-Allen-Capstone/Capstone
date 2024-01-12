import { Link } from "react-router-dom";
import mdbLogo from '../assets/mdbLogo.png'
import cartLogo from '../assets/cartLogo.png'

export default function Navigation({ token, setToken, setUser, cartCount }) {
    return (
        <div id='site-title'>
        <img id='logo-image' src={mdbLogo} alt=""/>
      <span>
            <Link to="/"> Home </Link>
            
            
            </span>
      <span>
            <Link to="/account"> Account </Link>
            <Link to="/login"> Login </Link>
            <Link to="/register"> Register </Link>
            <Link to="/cart"> <img src={cartLogo} width={"50px"} alt="cart" />
            <span className="cart-length">
                {cartCount}
            </span>
            </Link>
            {token && (
                <Link
                to="/login"
                onClick={() => {
                    setUser(null);
                    localStorage:removeItem("token");
                    localStorage:removeItem("username");
                    setToken(null);
                }}
                >
                    Logout
                </Link>
            )}
            </span>
            
      </div>
        
    );
}