import "./Homepage.css";
import { useContext } from "react";
import userContext from "./userContext";

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
      <h2>Jobly!</h2>
      <p>All the jobs in one convenient place for {loggedInUsername}</p>
    </div>
  );

}

export default Homepage;