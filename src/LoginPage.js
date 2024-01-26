
import LoginForm from "./LoginForm";
import JoblyApi from "./api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

/**
 *  Processes user inputs (from form) and attempts to authenticate user
 *  information. Makes call to Jobly API to login user and reroute to home.
 *
 *  Props:
 *    loginUser, a callback function that communicates to App component to
 *               'log in' user.
 *
 *  States:
 *    - errors: an array of error messages to be passed through when re-rendering
 *      the input form
 *
 *  Renders:
 *    RoutesList -> LoginPage -> LoginForm
 *
 */

function LoginPage({ loginUser }) {
  console.log("LoginPage rendered, prop loginUser:", loginUser);

  const [errors, setErrors] = useState()

  const navigate = useNavigate();

  /**Takes user credentials {username, password} and tries to log them in.
   * If successful, redirects to home. Otherwise, updates errors in state to
   * display on login form.
   */

  async function attemptLogin(credentials){
    try {
      await loginUser(credentials);
      navigate("/");
    } catch(error) {
      setErrors(error);
    }
  }

  return (
    <LoginForm
      onSubmit={attemptLogin}
      errors={errors}
    />
    );

  }

  export default LoginPage;
