import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci"
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Navigate = ({count}) => {
  return (
      <div>
        <Navbar className="nav">
          {/* <div className="navLogo">
              <Link to="/"><h1><i>Walmart</i></h1></Link>
          </div> */}
          <Container>
            <Navbar.Brand><Link to="/">Walmart</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse className="justify-content-end">
              <Nav className="me-auto">
                <Nav.Link><Link to="/"></Link>Home</Nav.Link>
                <Nav.Link >About</Nav.Link>
                <Nav.Link >Contact</Nav.Link>
                <Nav.Link><Link to="/CartList"><CiShoppingCart />{count}</Link></Nav.Link>
                <Nav.Link><Link to="/Wishlist"><CiHeart /></Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          {/* <div className="navMenu">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li className="cart-icon">
                  <Link to="/CartList"><CiShoppingCart />{count}</Link>
                </li> 
                <Link to="/Wishlist"><CiHeart /></Link>
              </ul>
          </div> */}
          </Container>
        </Navbar>
    </div>    
  )
}

export default Navigate
