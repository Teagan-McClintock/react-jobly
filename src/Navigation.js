import { NavLink } from "react-router-dom";
import "./Navigation.css";
import { useContext } from "react";
import userContext from "./userContext";

/**Navigation stays on the top of the screen and contains links to
 *  - homepage, JobList, CompanyList, Logout (for logged in users)
 *  - homepage, Login, Signup (for anonymous users)
 *
 * props: logout (function to sign user out of app)
 *
 * state: none
 *
 * renders:
 * App -> Navigation
 */

function Navigation({ logoutUser }) {

  const { loggedInUser } = useContext(userContext);

  //This method of setting style from
  //https://medium.com/@alexanie_/navlink-component-in-react-router-b83f4a11794f

  const activeState = ({ isActive, isPending }) => {
    return {
    color: isPending ? "rgb(253 230 138)" : "",
    backgroundColor: isActive ? "rgb(213, 213, 241)" : ""
    };
  };

  return (
    <header className="Navigation">
      {loggedInUser
        ? <div className="Navigation-links">
            <NavLink to={"/"} style={activeState}>Jobly</NavLink>
            <NavLink to={"/companies"} style={activeState}>Companies</NavLink>
            <NavLink to={"/jobs"} style={activeState}>Jobs</NavLink>
            <NavLink to={"/"} onClick={logoutUser} style={activeState}>
              {`Logout ${loggedInUser.username}`}
            </NavLink>
          </div>
        : <div className="Navigation-links">
            <NavLink to={"/"} style={activeState}>Jobly</NavLink>
            <NavLink to={"/login"} style={activeState}>Login</NavLink>
            <NavLink to={"/signup"} style={activeState}>Sign Up</NavLink>
          </div>
      }
    </header>
  )
}

export default Navigation;
