import { NavLink } from "react-router-dom";
import "./Navigation.css";

/**Navigation stays on the top of the screen and contains links to
 *  homepage, JobList, and CompanyList
 *
 * props: none
 *
 * state: none
 *
 * renders:
 * App -> Navigation
 */

function Navigation() {
  const activeState = ({ isActive, isPending }) => {
    return {
    color: isPending ? "rgb(253 230 138)" : "",
    backgroundColor: isActive ? "rgb(213, 213, 241)" : ""
    };
  };

  return (
    <header className="Navigation">
      <div className="Navigation-links">
        <NavLink to={"/"} style={activeState}>Jobly</NavLink>
        <NavLink to={"/companies"} style={activeState}>Companies</NavLink>
        <NavLink to={"/jobs"} style={activeState}>Jobs</NavLink>
      </div>
    </header>
  ) // use NavLink instead of Link here (come back to this when we style)
}

export default Navigation;

// <div className="Navigation">
// <header className="Navigation">
//   <NavLink to={"/"} style={activeState}>Jobly</NavLink>
//   <NavLink to={"/companies"} style={activeState}>Companies</NavLink>
//   <NavLink to={"/jobs"} style={activeState}>Jobs</NavLink>
// </header>
// </div>