import logo from "./travel-icon.png";
import "./App.css";

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

              <Nav.Link href="#link">Destinations</Nav.Link>
              <Nav.Link href="#link">Photography</Nav.Link>

              <Nav.Link href="#link">Travel Planning</Nav.Link>
              <Nav.Link href="#link">Social</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>

              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
      <br />
      <Container>
        <Outlet />
      </Container>
      <footer>
        <Table>

        </Table>
      </footer>
    </div>
  );
}

export default App;
