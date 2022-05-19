import { Outlet } from "react-router-dom";
import MainNavBar from "./components/MainNavBar";
import "./App.css";


function App() {

  return (
    <div>
     <MainNavBar  text_color="nav-text-main"/> 
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
