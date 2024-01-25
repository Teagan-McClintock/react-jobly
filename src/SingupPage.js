
/**
 *  SignupPage takes a new user's inputs (from form) and attempts to register
 *  user. Makes call to Jobly API to register user.
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
 *    RoutesList -> SignupPage -> SignupForm
 *
 */
function SignupPage({ loginUser }) {
  console.log("Signup page rendered, prop loginUser:", loginUser);
}

export default SignupPage;