
import LoginForm from "./LoginForm";

/**
 *  Processes user inputs (from form) and attempts to authenticate user
 *  information. Makes call to Jobly API to login user.
 *
 *  Props:
 *    loginUser, a callback function that communicates to App component to
 *               'log in' user.
 *
 *  States:
 *    - isLoading, a boolean
 *    - userData, an object
 *        {username, firstname, lastname, email}
 *
 *  Renders:
 *    RoutesList -> LoginPage -> LoginForm
 *
 */
function LoginPage({ loginUser }) {
  console.log("LoginPage rendered, prop loginUser:", loginUser);

}

export default LoginPage;