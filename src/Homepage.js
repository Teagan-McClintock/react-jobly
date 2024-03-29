import "./Homepage.css";
import { useContext } from "react";
import userContext from "./userContext";
import { Link } from "react-router-dom";

/**
 *  Homepage shows slogan and greeting to logged in users, links to login or
 *    signup to anonymous users.
 *
 *  Props: none
 *
 *  States: none
 *
 *  Renders:
 *    RoutesList -> Homepage
 */

function Homepage() {
  console.log("Homepage rendered, no props");
  const { loggedInUser } = useContext(userContext);

  return (
    <div className="Homepage">
      <h2>Jobly!</h2>
      <p>All the jobs in one convenient place</p>
      {loggedInUser
        ? <div>
            <p>Welcome back, {loggedInUser.firstName} </p>
          </div>
        : <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
      }
    </div>
  );

}

export default Homepage;