
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

  /**Takes user credentials {username, password} and makes Api call
   * to see if they have an account. If they do, updates Api token to that
   * user's token, logs them in, and redirects to home. Otherwise, updates
   * errors in state to display on login form.
   */

  async function fetchUserToken(credentials){
    try {
      const token = await JoblyApi.signIn(credentials);
      // console.log("RESULT", token);
      JoblyApi.token = token;
      const user = await JoblyApi.getUser(credentials.username);
      loginUser(user);
      navigate("/");
    } catch(error) {
      setErrors(error);
    }
  }

  return (
    <LoginForm
      onSubmit={fetchUserToken}
      errors={errors}
    />
    );

  }

  export default LoginPage;
