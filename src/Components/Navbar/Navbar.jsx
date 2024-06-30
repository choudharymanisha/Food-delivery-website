// Navbar.js
import React, { useState } from 'react';
import './Navbar.css'; // Make sure this path is correct
import { assets } from "../../assets/assets";
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin})=> {
    const [menu, setMenu] = useState("menu");

    return (
        <>
            <div className='navbar'> {/* Make sure class name matches */}
               <Link to = '/'> <img src={assets.logo} className='logo' /></Link>
                <ul className='navbar-menu'> {/* Make sure class name matches */}
                    <Link onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                    < a href ="#explore-menu"onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                    < a href = "#app-download" onClick={() => setMenu("mobile")} className={menu === "mobile" ? "active" : ""}>mobile</a>
                    <  a href  = "#footer"onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""}>contact us</a>
                </ul>
                <div className='navbar-right'>
                   <img src={assets.search_icon} alt="Search" />
                    <div className='navbar-search-icon'>
                      <Link to ="/cart"> <img src={assets.basket_icon} alt="Basket" /></Link>
                        <div className='dot'></div>
                    </div>
                    <button onClick={()=>setShowLogin(true)}>Sign in</button>
                </div>
            </div>
        </>
    );
}

export default Navbar;
