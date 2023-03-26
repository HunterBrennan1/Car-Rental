import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from './components/Nav.js';
import MainPage from './components/Main.js';
import Rental from './components/Rental.js';
import ThreeBubbles from "./components/threebubbles";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
      <Rental />
      <ThreeBubbles />
    </div>
  );
}

export default App;
