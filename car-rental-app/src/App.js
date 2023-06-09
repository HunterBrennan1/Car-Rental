import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/Nav.js';
// import MainPage from './components/Main.js';
// import Rental from './components/Rental.js';
// import ThreeBubbles from "./components/threebubbles";
// import Models from "./components/models";
// import BreakPoint from "./components/breakpoint";
// import Package from "./components/package";
// import Reviews from "./components/reviews";
// import FAQ from "./components/faq";
// import AppStore from "./components/mobile-app";
// import Footer from "./components/footer";
import Home from "./components/home";
import About from './components/about';
import VehicleModels from "./components/vehiclemodels";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/vehiclemodels' element={<VehicleModels />}></Route>
      <Route path='/testimonials' element={<Testimonials />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
  );
}

export default App;
