import logo from './logo.svg';
import './App.css';

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
    <Navbar collapseOnSelect fixed='top' expand='sm' bg="white">
      <Container>
      <Navbar.Brand href="#home">AYESHAWASHERE</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <Nav.Link href="#link">Inquiries</Nav.Link>
        <Nav.Link href="#link">Itineraries</Nav.Link>
        <Nav.Link href="#link">Trips</Nav.Link>

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
    <Container>
    <Outlet />
    </Container>

    </div>

    
  );

}

export default App;
