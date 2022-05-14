import React, { useState } from 'react'
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import './MainNavBar.css';
import logo from "../travel-icon.png";
import fbLogo from "../Facebook-logo.png";
import igLogo from "../instalogo.png";


const MainNavBar= () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY >= 1){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return(
        <div>
<Navbar className={colorChange ? 'navbar colorChange' : 'navbar'}
  collapseOnSelect fixed="top" expand="sm" bg="">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} class="travelImg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav-links">
              <Nav.Link  href="/inquiries" className="nav-text">Inquiries</Nav.Link>
              <Nav.Link href="/blog" className="nav-text">Blog</Nav.Link>

              <Nav.Link href="/destinations" className="nav-text">Destinations</Nav.Link>
              <Nav.Link href="/photography" className="nav-text">Photography</Nav.Link>

              <Nav.Link href="/travel_planning" className="nav-text">Travel Planning</Nav.Link>
              
              <NavDropdown title="Social" id="basic-nav-dropdown" >
          <NavDropdown.Item href="https://www.facebook.com/ayesha.washington.12"><img src={fbLogo} class="socialIcon"></img>  Facebook</NavDropdown.Item> 
          <hr></hr>
          <NavDropdown.Item href="https://www.instagram.com/ayesha_was_here/"><img src={igLogo} class="socialIcon"></img>  Instagram</NavDropdown.Item>
        </NavDropdown>
              <Nav.Link href="/about" className="nav-text">About</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    )
}
export default MainNavBar;