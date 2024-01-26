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

  /**Takes userInfo {username, firstName, lastName, email} and makes
   * an Api call to attempt to create an account for that user. If successful,
   * sets Api token to that user's newly created token and logs user in to site,
   * then redirects to homepage. Otherwise, updates errors in state to be
   * displayed on signup form
   */

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

  return (
    <SignupForm
      onSubmit={registerUserAndCreateToken}
      errors={errors}
    />
  );
}

export default SignupPage;