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

const router = createBrowserRouter([
  {
    path: "/",
    element:{App},
  },
  {
    path: "/browser",
    element:{Browser},
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
