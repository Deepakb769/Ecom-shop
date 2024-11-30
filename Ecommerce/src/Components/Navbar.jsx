import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci"
// import { Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = ({count}) => {
  return (
      <div>
        <div className="nav">
          <div className="navLogo">
              <h1><i>Walmart</i></h1>
          </div>
          <div className="navMenu">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li className="cart-icon">
                  <Link to="/CartList"><CiShoppingCart />{count}</Link>
                </li> 
                <Link to="/Wishlist"><CiHeart /></Link>
              </ul>
          </div>
          </div>
    </div>    
  )
}

export default Navbar
