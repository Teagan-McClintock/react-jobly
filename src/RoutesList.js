import { Routes, Route } from 'react-router-dom';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import Homepage from './Homepage';
import JobList from './JobList';

/**RoutesList contains a list of routes
 *
 * props: none
 *
 * state: none
 *
 * renders:
 * App -> RoutesList -> {JobList, CompanyDetail, CompanyList, Homepage}
 */

function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetail />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="/*" element={null} />
    </Routes>
  )

}

export default RoutesList;