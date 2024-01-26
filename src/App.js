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
  //make token live in state?
  //make user updates change localstorage
  const [loggedInUser, setLoggedInUser] = useState(null);

  /**Updates state to add passed-in user as logged-in user */

  /**Takes user credentials {username, password} and makes Api call
   * to see if they have an account. If they do, updates Api token to that
   * user's token, logs them in.
   *
   * Will throw error if user supplied bad credentials.
   */

  async function loginUser(credentials) {
    const token = await JoblyApi.signIn(credentials);
    JoblyApi.token = token;
    const user = await JoblyApi.getUser(credentials.username);

    setLoggedInUser(user);
  }

  /**Takes userInfo {username, firstName, lastName, email} and makes
   * an Api call to attempt to create an account for that user. If successful,
   * sets Api token to that user's newly created token and logs user in to site
   *
   * Will throw error if username is taken or values are invalid (empty).
  */

  async function signupUser(userInfo) {
    const token = await JoblyApi.signUp(userInfo);
    JoblyApi.token = token;
    setLoggedInUser({
      username: userInfo.username,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email
    });
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
          <Navigation logoutUser={logoutUser} />
          <RoutesList
            loginUser={loginUser}
            signupUser={signupUser}
            loggedInUser={loggedInUser}
          />
        </BrowserRouter>
      </userContext.Provider>
    </div>
  );
}

export default App;
