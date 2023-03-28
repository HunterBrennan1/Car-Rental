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

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
      <Rental />
      <ThreeBubbles />
      <Models />
      <BreakPoint />
      <Package />
      <Reviews />
      <FAQ />
    </div>
  );
}

export default App;
