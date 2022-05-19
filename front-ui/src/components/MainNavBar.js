import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";
import './MainNavBar.css';
import logo from "../travel-icon.png";
import fbLogo from "../Facebook-logo.png";
import igLogo from "../instalogo.png";


const MainNavBar= () => {
    const [colorChange, setColorchange] = useState(false);
    const location = useLocation();
    let text_color = "";
    let nav_dropdown_color = "";
    if (location.pathname === '/') {
      text_color="nav-text-main";
      nav_dropdown_color="basic-nav-dropdown";
    }
    console.log(location.pathname);
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
              <Nav.Link  href="/inquiries" className={text_color}>Inquiries</Nav.Link>
              <Nav.Link href="/blog" className={text_color}>Blog</Nav.Link>

              <Nav.Link href="/destinations" className={text_color}>Destinations</Nav.Link>
              <Nav.Link href="/photography" className={text_color}>Photography</Nav.Link>

              <Nav.Link href="/travel_planning" className={text_color}>Travel Planning</Nav.Link>
              
              <NavDropdown title="Social" id={nav_dropdown_color} >
          <NavDropdown.Item href="https://www.facebook.com/ayesha.washington.12"><img src={fbLogo} class="socialIcon"></img>  Facebook</NavDropdown.Item> 
          <hr></hr>
          <NavDropdown.Item href="https://www.instagram.com/ayesha_was_here/"><img src={igLogo} class="socialIcon"></img>  Instagram</NavDropdown.Item>
        </NavDropdown>
              <Nav.Link href="/about" className={text_color}>About</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    )
}
export default MainNavBar;