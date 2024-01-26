import './App.css';
import RoutesList from './RoutesList';
import Navigation from './Navigation';
import { BrowserRouter } from "react-router-dom";
import userContext from './userContext';
import { useState } from "react";
import JoblyApi from './api';

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
  const [loggedInUser, setLoggedInUser] = useState(null);

  function loginUser(user) {
    setLoggedInUser(user);
  }

  function logoutUser() {
    JoblyApi.token = null;
    setLoggedInUser(null);
  }

  return (
    <div className="App">
      <userContext.Provider value={{ loggedInUser }}>
        <BrowserRouter>
          <Navigation />
          <RoutesList
            loginUser={loginUser}
            loggedInUser={loggedInUser}
          />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
