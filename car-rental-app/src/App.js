import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from './components/Nav.js';
import MainPage from './components/Main.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
    </div>
  );
}

export default App;
