import JobCardList from "./JobCardList";
import { useState, useEffect } from "react";
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

  useEffect(fetchCompanyDetailsOnMount, []);

  return (
    <div className="CompanyDetail">

      {isLoading === true
        ? <div>Loading...</div>
        : (
            <>
              <div>
                <h3>{company.name}</h3>
                <p>{company.description}</p>
              </div>
              <JobCardList jobs={company.jobs}/>
            </>
          )
      }
    </div>

  );

}

export default CompanyDetail;

// ask about jsx fragment

// TODO: eventually, we'll want a handler for
// if we have company, do stuff on page
// or use useNavigate/Navigate to take them to NotFoundError
// or a customized NotFound on this page <--