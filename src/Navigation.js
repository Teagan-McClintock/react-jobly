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
      <div className="Navigation-links">
        <NavLink to={"/"} style={activeState}>Jobly</NavLink>
        <NavLink to={"/companies"} style={activeState}>Companies</NavLink>
        <NavLink to={"/jobs"} style={activeState}>Jobs</NavLink>
      </div>
    </header>
  )
}

export default Navigation;