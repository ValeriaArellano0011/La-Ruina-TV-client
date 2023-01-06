import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Browser from './Components/Browser';
import Novedades from './Components/Novedades';
import Colaborar from './Components/Colaborar';
import Lanzamientos from './Components/Lanzamientos';
import Tienda from './Components/Tienda';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route exact path='/browser' element={<Browser/>}/>
        <Route exact path='/novedades' element={<Novedadses/>}/>
        <Route exact path='/colaborar' element={<Colaborar/>}/>
        <Route exact path='/lanzamientos' element={<Lanzamientos/>}/>
        <Route exact path='/tienda' element={<Tienda/>}/>
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
  
);
