import './App.css';
import RoutesList from './RoutesList';
import Navigation from './Navigation';
import { BrowserRouter } from "react-router-dom";
import userContext from './userContext';
import { useState } from "react";
import JoblyApi from './api';

/** App, renders Nav bar and routes and keeps loggedInUser in context
 *
 * Props: none
 *
 * state: loggedInUser, an object {username, firstName, lastName, email}
 *
 * Renders:
 * App -> Navigation
 * App -> RoutesList
 */

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  /**Updates state to add passed-in user as logged-in user */

  function loginUser(user) {
    setLoggedInUser(user);
  }

  /**Updates state to clear logged-in user, and clears token from JoblyApi */

  function logoutUser() {
    JoblyApi.token = null;
    setLoggedInUser(null);
  }

  return (
    <div className="App">
      <userContext.Provider value={{ loggedInUser }}>
        <BrowserRouter>
          <Navigation logoutUser={logoutUser}/>
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
