import JobCardList from "./JobCardList";
import { useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";

/**
 *  CompanyDetail does the following:
 *    - shows name and handle of company along with JobList for company
 *    - makes fetch request to get information about a company and its jobs
 *        from URL params
 *
 *  Props: none
 *
 *  States:
 *    - company, an object
 *        {handle, name, description, numEmployees, logoUrl, jobs}
 *        (where jobs is an array
 *          [{id, title, salary, equity, companyHandle, companyName},...])
 *    - isLoading, a boolean
 *
 *  Renders:
 *    RoutesList -> CompanyDetail -> JobCardList
 *
 */

function CompanyDetail() {
  console.log("CompanyDetail rendered, took no props");
  const [company, setCompany] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { handle } = useParams();

  //Get company data, will return with info + jobs
  function fetchCompanyDetailsOnMount() {
    async function fetchCompanyDetails() {
      const queriedCompany = await JoblyApi.getCompany(handle);
      setCompany(queriedCompany);
      setIsLoading(false);
    }
    fetchCompanyDetails();
  }

  return (
    <div className="CompanyDetail">
      <p>Details on a company!</p>
      <JobCardList jobs={[{id: 3}]}/>
    </div>

  );

}

export default CompanyDetail;