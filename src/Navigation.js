import { Link, NavLink } from "react-router-dom"

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
    backgroundColor: isActive ? "rgb(69 26 3)" : "",
    fontWeight: isActive ? "bold" : ""
    };
  };

  return (
    <header className="Navigation">
      <NavLink to={"/"} style={activeState}>Jobly</NavLink>
      <NavLink to={"/companies"} style={activeState}>Companies</NavLink>
      <NavLink to={"/jobs"} style={activeState}>Jobs</NavLink>
    </header>
  ) // use NavLink instead of Link here (come back to this when we style)
}

export default Navigation;