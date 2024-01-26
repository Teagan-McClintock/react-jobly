import SignupForm from "./SignupForm";
import JoblyApi from "./api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


/**
 *  SignupPage takes a new user's inputs (from form) and attempts to register
 *  user. Makes call to Jobly API to register user, then redirects to home.
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

function SignupPage({ signupUser }) {
  console.log("Signup page rendered, prop signupUser:", signupUser);

  const [errors, setErrors] = useState();

  const navigate = useNavigate();

  /**Takes userInfo {username, firstName, lastName, email} and  attempts to
   * create an account for that user. If successful, logs user in to site,
   * then redirects to homepage. Otherwise, updates errors in state to be
   * displayed on signup form
   */

  async function registerUserAndCreateToken(userInfo){
    try {
      await signupUser(userInfo);
      navigate("/");
    } catch(error){
      setErrors(error);
    }
  }

  return (
    <SignupForm
      onSubmit={registerUserAndCreateToken}
      errors={errors}
    />
  );
}

export default SignupPage;