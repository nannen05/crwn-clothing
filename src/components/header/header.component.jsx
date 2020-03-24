import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="header">
        <Link to="/" className="header__logo">
            <img src="https://www.freeiconspng.com/uploads/crown-png-20.png" />
        </Link>
        <div className="header__menu">
            <Link to="/shop" className="header__menu--item">Shop</Link>
            <Link to="/contact" className="header__menu--item">Contact</Link>
        </div>
    </div>
)

export default Header;