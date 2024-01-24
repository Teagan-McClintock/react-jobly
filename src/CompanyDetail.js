
/**
 *  CompanyDetail does the following:
 *    - shows name and handle of company along with JobList for company
 *    - makes fetch request to get information about a company and its jobs
 *        from URL params
 *
 *  Props: none
 *
 *  States:
 *    - company, an object {handle, name, description, numEmployees, logoUrl}
 *    - jobs, an array
 *        [{id, title, salary, equity, companyHandle, companyName},...]
 *    - isLoading, a boolean
 *
 *  Renders:
 *    RoutesList -> CompanyDetail -> JobCardList
 *
 */
function CompanyDetail() {
  console.log("CompanyDetail rendered, took no props");

  return (
    <p>Details on a company!</p>
  );

}

export default CompanyDetail;