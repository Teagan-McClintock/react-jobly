import SignupForm from "./SignupForm";
import JoblyApi from "./api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


/**
 *  SignupPage takes a new user's inputs (from form) and attempts to register
 *  user. Makes call to Jobly API to register user.
 *
 *  Props:
 *    loginUser, a callback function that communicates to App component to
 *               'log in' user.
 *
 *  States:
 *    - errors: an array of error messages to be passed through when re-rendering
 *      the signup form
 *
 *  Renders:
 *    RoutesList -> SignupPage -> SignupForm
 *
 */
function SignupPage({ loginUser }) {
  console.log("Signup page rendered, prop loginUser:", loginUser);

  const [errors, setErrors] = useState();

  const navigate = useNavigate();

  async function registerUserAndCreateToken(userInfo){
    try {
      const token = await JoblyApi.signUp(userInfo);
      JoblyApi.token = token;
      loginUser({
        username: userInfo.username,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email});
      navigate("/");
    } catch(error){
      setErrors(error);
    }
  }

  function handleSubmit(userInfo){
    registerUserAndCreateToken(userInfo);
  }

  return (
    <SignupForm
      onSubmit={handleSubmit}
      errors={errors}
    />
  );
}

export default SignupPage;