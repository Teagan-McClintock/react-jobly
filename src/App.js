import './App.css';
import RoutesList from './RoutesList';
import Navigation from './Navigation';
import { BrowserRouter } from "react-router-dom";
import userContext from './userContext';
import { useState, useEffect } from "react";
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

  // console.log("our beloved token", JoblyApi.token);

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


  /**
   *  After first render, checks if user and token exist in localStorage. If
   *  they do, then loggedInUser state gets updated to the contents of
   *  userFromStorage and JoblyApi token is updated to tokenFromStorage.
   *
   *  This is useful for cases where a logged-in-user edits the path in-url
   *  so they can remain logged in.
   */

  useEffect(function updateLoginInfoIfExistsInStorage() {
    const userFromStorage = JSON.parse(localStorage.getItem('user'));
    const tokenFromStorage = localStorage.getItem('token');
    console.log("checkif user is in local storage rendered");
    if (userFromStorage) {
      setLoggedInUser(userFromStorage);
    }
    if (tokenFromStorage) {
      JoblyApi.token = tokenFromStorage;
    }
  }, []);

  // this one must come after the null because:
  // this one will set it properly at the right time
  /**
   *  After any time loggedInUser changes, sets localStorage's 'user' to
   *  the contents of loggedInUser.
   */
  useEffect(function addUserDataToLocalStorageOnLoginOrSignup() {
    localStorage.setItem('user', JSON.stringify(loggedInUser));
    console.log("new user set with useeffect that updates user");
  }, [loggedInUser]);

  /**
   *  After any time JoblyApi.token changes, sets localStorage's 'token' to
   *  the value of JoblyApi.token.
   */
    useEffect(function addUserDataToLocalStorageOnLoginOrSignup() {
      localStorage.setItem('token', JoblyApi.token);
      console.log("new token set with useeffect that updates user");
    }, [JoblyApi.token]);

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
