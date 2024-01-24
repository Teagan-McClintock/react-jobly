import logo from './logo.svg';
import './App.css';
import RoutesList from './RoutesList';
import Navigation from './Navigation';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
