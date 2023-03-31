import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from './components/Nav.js';
import MainPage from './components/Main.js';
import Rental from './components/Rental.js';
import ThreeBubbles from "./components/threebubbles";
import Models from "./components/models";
import BreakPoint from "./components/breakpoint";
import Package from "./components/package";
import Reviews from "./components/reviews";
import FAQ from "./components/faq";
import AppStore from "./components/mobile-app";
import Footer from "./components/footer";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/home";
import About from './components/about';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        {/* <Route path='/vehiclemodels' element={<VehicleModels />}></Route> */}
        {/* <Route path='/testimonials' element={<Testimonials />}></Route> */}
        {/* <Route path='/team' element={<Team />}></Route> */}
        {/* <Route path='/contact' element={<Contact />}></Route> */}
      </Routes>

    </div>
  );
}

export default App;
