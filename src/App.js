import './App.css';
import RoutesList from './RoutesList';
import Navigation from './Navigation';
import { BrowserRouter } from "react-router-dom";
import userContext from './userContext';
import { useState } from "react";

/** App, renders Nav bar and routes
 *
 * Props: none
 *
 * state: loggedInUsername, a string
 *
 * Renders:
 * App -> Navigation
 * App -> RoutesList
 */

function App() {
  const [loggedInUsername, setLoggedInUsername] = useState(null);

  function loginUser(username) {
    setLoggedInUsername(username);
  }

  return (
    <div className="App">
      <userContext.Provider value={{loggedInUsername}}>
        <BrowserRouter>
          <Navigation />
          <RoutesList
            loginUser={loginUser}
            loggedInUsername={loggedInUsername}
          />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
