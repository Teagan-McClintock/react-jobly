import { Routes, Route } from 'react-router-dom';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import Homepage from './Homepage';
import JobList from './JobList';
import NotFoundPage from './NotFoundPage';
import LoginPage from './LoginPage';
import SignupPage from './SingupPage';
import ProfilePage from './ProfilePage';

/**RoutesList contains a list of routes
 *
 * props: loginUser (a function from App to pass to login/signup routes)
 *
 * state: none
 *
 * renders:
 * App -> RoutesList -> {JobList, CompanyDetail, CompanyList, Homepage}
 */

function RoutesList({ loginUser }) {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/login" element={<LoginPage loginUser={loginUser}/>} />
      <Route path="/signup" element={<SignupPage loginUser={loginUser}/>} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  )

}

export default RoutesList;
