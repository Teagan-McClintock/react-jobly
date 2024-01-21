import JobCardList from "./JobCardList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import NotFoundPage from './NotFoundPage';

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
      let queriedCompany;
      try {
        queriedCompany = await JoblyApi.getCompany(handle);
      } catch {
        queriedCompany = "error";
      }
      setIsLoading(false);
      setCompany(queriedCompany);
    }

    fetchCompanyDetails();
  }

  useEffect(fetchCompanyDetailsOnMount, [handle]);

  if (company === "error") {
    return (
      <NotFoundPage />
    );
  }

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