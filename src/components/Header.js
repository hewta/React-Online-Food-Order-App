import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineState = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItem: ",cartItems);

  return (
    <div className="header">
      <div classNmae="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
        <Link><li>Status: {onlineState ? "Online✅" : "Offline🔴"}</li></Link>
          <Link to="/grocery">
            <li>Instamart</li>
          </Link>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Me</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
          <Link to="/cart">
            <li className="cart">Instamart-Cart: {cartItems.length}</li>
          </Link>
          <button
            className="login"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
          <li className="loggedin">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
