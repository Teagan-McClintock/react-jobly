import { Routes, Route } from 'react-router-dom';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import Homepage from './Homepage';
import JobList from './JobList';
import NotFoundPage from './NotFoundPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ProfilePage from './ProfilePage';
import { Navigate } from 'react-router-dom';

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

function RoutesList({ loginUser, signupUser, loggedInUser }) {
  //TODO: Add filtering for login/signup to not exist for logged-in users
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {loggedInUser &&
        <>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/companies" element={<CompanyList />} />
          <Route path="/companies/:handle" element={<CompanyDetail />} />
          <Route path="/jobs" element={<JobList />} />
        </>
      }
      {!loggedInUser &&
        <>
          <Route path="/login" element={<LoginPage loginUser={loginUser} />} />
          <Route
            path="/signup"
            element={<SignupPage signupUser={signupUser} />}
          />
          <Route path="/profile" element={<Navigate to="/signup" />} />
          <Route path="/companies" element={<Navigate to="/signup" />} />
          <Route path="/companies/*" element={<Navigate to="/signup" />} />
          <Route path="/jobs" element={<Navigate to="/signup" />} />
        </>
      }
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );

}

// TODO: time permitting, refine extra routes for non-logged in user

export default RoutesList;
