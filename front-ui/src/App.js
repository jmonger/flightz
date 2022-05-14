
import "./App.css";

import Home from "./components/Home"
import MainNavBar from "./components/MainNavBar";


import { Navbar, Nav, Container, NavDropdown, Table } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function App() {

  return (
    <div>
     <MainNavBar></MainNavBar> 
      <br />
      <br />

        <br></br>
        <br></br>
        <Outlet />
<br></br>
<br></br>
      <footer>
<p className="footerInfo">Copyright | All Rights Reserved | Ayesha Was Here | Webpage Designed By Jamal and Dee</p>
      </footer>
    </div>
  );
}

export default App;
