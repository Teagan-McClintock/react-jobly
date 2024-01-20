import './App.css';
import RoutesList from './RoutesList';
import Navigation from './Navigation';
import { BrowserRouter } from "react-router-dom";

/** App, renders Nav bar and routes
 *
 * Props: none
 *
 * state: none
 *
 * Renders:
 * App -> Navigation
 * App -> RoutesList
 */

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
