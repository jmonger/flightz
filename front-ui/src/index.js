import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/Home'
import Inquiries from './components/Inquiries';
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
     
      </Route>
    </Routes>
  </BrowserRouter>
);

