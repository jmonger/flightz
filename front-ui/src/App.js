import logo from "./travel-icon.png";
import "./App.css";
import fbLogo from "./Facebook-logo.png";
import igLogo from "./instalogo.png";



import { Navbar, Nav, Container, NavDropdown, Table } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="white">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} class="travelImg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto nav-links">
              <Nav.Link href="/inquiries">Inquiries</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>

              <Nav.Link href="/destinations">Destinations</Nav.Link>
              <Nav.Link href="/photography">Photography</Nav.Link>

              <Nav.Link href="/travel_planning">Travel Planning</Nav.Link>
              
              <NavDropdown title="Social" id="basic-nav-dropdown">
          <NavDropdown.Item href="https://www.facebook.com/ayesha.washington.12"><img src={fbLogo} class="socialIcon"></img>  Facebook</NavDropdown.Item>
          <hr></hr>
          <NavDropdown.Item href="https://www.instagram.com/ayesha_was_here/"><img src={igLogo} class="socialIcon"></img>  Instagram</NavDropdown.Item>
        </NavDropdown>
              <Nav.Link href="/about">About</Nav.Link>

              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
      <Container>
        <br></br>
        <br></br>
        <Outlet />
      </Container>
<br></br>
<br></br>
      <footer>
<p className="footerInfo">Copyright | All Rights Reserved | Ayesha Was Here | Webpage Designed By Jamal and Dee</p>
      </footer>
    </div>
  );
}

export default App;
