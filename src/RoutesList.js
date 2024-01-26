import { Routes, Route } from 'react-router-dom';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import Homepage from './Homepage';
import JobList from './JobList';
import NotFoundPage from './NotFoundPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ProfilePage from './ProfilePage';

/**RoutesList contains a list of routes, with more routes rendering if logged in
 *
 * props:
 *  - loginUser (a function from App to pass to login/signup routes)
 *  - loggedInUser (a user object from App used to validate whether signed in
 *      or not)
 *
 * state: none
 *
 * renders:
 * App -> RoutesList -> {JobList, CompanyDetail, CompanyList, Homepage,
 *                        ProfilePage, LoginPage, SignupPage, NotFoundPage}
 */

function RoutesList({ loginUser, loggedInUser }) {

  return (
    <Routes>
      <Route path="/login" element={<LoginPage loginUser={loginUser}/>} />
      <Route path="/signup" element={<SignupPage loginUser={loginUser}/>} />
      <Route path="/" element={<Homepage />} />
      {loggedInUser &&
        <>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:handle" element={<CompanyDetail />} />
          <Route path="/jobs" element={<JobList />} />
        </>
      }
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );

}

// TODO: time permitting, refine extra routes for non-logged in user
// Also: <></> ask about jsx fragments & if they're acceptable style-wise

export default RoutesList;
