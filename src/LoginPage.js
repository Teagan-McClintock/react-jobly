
import LoginForm from "./LoginForm";
import JoblyApi from "./api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

  const [errors, setErrors] = useState()

  const navigate = useNavigate();

  async function fetchUserToken(credentials){
    try {
      const token = await JoblyApi.signIn(credentials);
      // console.log("RESULT", token);
      JoblyApi.token = token;
      navigate("/");
      //TODO: add context here when you create context:
      // loginUser(token); // or credentials.username
    } catch(error) {
      setErrors(error);
    }
  }

  function handleSubmit(credentials){
    fetchUserToken(credentials);
  }

  return (
    <LoginForm
      onSubmit={handleSubmit}
      defaultData={{username: "", password: ""}}
      errors={errors}
    />
    );

  }

  export default LoginPage;
