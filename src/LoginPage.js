
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
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState();

  const navigate = useNavigate();

  async function fetchUserToken(credentials){
    const token = await JoblyApi.signIn(credentials);
    console.log("RESULT", token);
    if (token){
      JoblyApi.token = token;
      //Update context
      navigate("/");
    }
    else {
      console.log("In ELSE");
      return <LoginForm onSubmit={fetchUserToken}
        errors={token.error.message}
        defaultData={credentials}/>
    }
  }

  function handleSubmit(credentials){
    setIsLoading(true);
    fetchUserToken(credentials);
    setIsLoading(false);
  }

  return (
    <LoginForm onSubmit={handleSubmit} defaultData={{username: "", password: ""}} />
  )

}

export default LoginPage;