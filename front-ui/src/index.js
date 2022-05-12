import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/Home'
import Inquiries from './components/Inquiries';
import Blog from './components/Blog';
import Destinations from './components/Destinations';
import Photography from './components/Photography';
import TravelPlanning from './components/TravelPlanning';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.css';



import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      <Route index path="/" element={<Home />} />
      <Route path="/inquiries" element={<Inquiries />} />
      <Route path="/blog" element={<Blog />}/>
      <Route path="/destinations" element={<Destinations />}/>
      <Route path="/photography" element={<Photography />}/>
      <Route path="/travel_planning" element={<TravelPlanning />}/>
      <Route path="/about" element={<About />}/>
    
      </Route>
    </Routes>
  </BrowserRouter>
);

