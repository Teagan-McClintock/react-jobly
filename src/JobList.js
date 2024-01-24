import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";

/**
 *  JobList does the following:
 *    - define onSubmit for SearchForm
 *    - make fetch request to get information about searched term
 *
 *  Props: none
 *
 *  States:
 *  - jobs, an array
 *        [{id, title, salary, equity, companyHandle, companyName},...]
 *  - isLoading, a boolean
 *  - searchedTerm, a string
 *
 *  Renders:
 *    RoutesList -> JobList -> JobCardList
 *    RoutesList -> JobList -> SearchForm
 *
 */

function JobList() {
  console.log("JobList rendered, took no props");

  return (
    <div className="JobList">
      <SearchForm />
      <JobCardList jobs={[{id: 1}, {id: 2}]} />
    </div>
  );

}

export default JobList;