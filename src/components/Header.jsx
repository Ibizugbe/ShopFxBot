import React, { useRef } from 'react';
import {FaBars, FaTimes} from "react-icons/fa"
import './Header.css';


function Header() {

    const navRef = useRef()
    const showNavBar = () => {
        navRef.current.classList.toggle("responsive-nav");
    }

    return ( 
        <header>
            <div className="logo">
                ShopFxBot
            </div>
            <nav ref={navRef}>
                <a href="/Products">Products</a>
                <a href="/Contact">Contact</a>
                <a href="/Features">Features</a>
                <a href="/Updates">Updates</a>
                <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                    <FaTimes />
                </button>                                                         
            </nav>
            <button className='nav-btn' onClick={showNavBar}>
                <FaBars />
            </button>
        </header>
     );
}

export default Header;