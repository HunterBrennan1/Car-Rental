import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from './components/Nav.js';
import MainPage from './components/Main.js';
import Rental from './components/Rental.js';
import ThreeBubbles from "./components/threebubbles";
import Models from "./components/models";
import BreakPoint from "./components/breakpoint";
import Package from "./components/package";

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
    </div>
  );
}

export default App;
