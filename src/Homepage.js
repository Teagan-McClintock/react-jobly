import "./Homepage.css";
import { useContext } from "react";
import userContext from "./userContext";
import { Link } from "react-router-dom";

/**
 *  Homepage shows slogan.
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
  const { loggedInUsername } = useContext(userContext);

  return (
    <div className="Homepage">
      {loggedInUsername
        ?<div>
          <h2>Jobly!</h2>
          <p>All the jobs in one convenient place</p>
          <p>Welcome back, {loggedInUsername} </p>
        </div>
        : <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>}
    </div>
  );

}

export default Homepage;