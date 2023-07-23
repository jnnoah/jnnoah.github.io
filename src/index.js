import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import Programs from "./Components/Programs.jsx";
import Rebook from "./Components/Rebook.jsx";
import Confirmation from "./Components/Confirmation.jsx";
import Locations from "./Components/Locations.jsx";
import Laundry from "./Components/Laundry.jsx";
import Contact from './Components/Contact';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "programs",
    element: <Programs />,
  },
  {
    path: "rebook",
    element: <Rebook />,
  },
  {
    path: "confirmation",
    element: <Confirmation />,
  },
  {
    path: "locations",
    element: <Locations />,
  },
  {
    path: "laundry",
    element: <Laundry />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
