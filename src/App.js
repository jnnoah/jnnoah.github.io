import './App.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import Programs from "./Components/Programs.jsx";
import Rebook from "./Components/Rebook.jsx";
import Confirmation from "./Components/Confirmation.jsx";
import Locations from "./Components/Locations.jsx";
import Laundry from "./Components/Laundry.jsx";
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
