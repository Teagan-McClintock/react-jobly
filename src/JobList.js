import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";
import { useEffect, useState } from "react";
import JoblyApi from "./api";

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

  const [jobs, setJobs] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [searchedTerm, setSearchedTerm] = useState("");

  /** Takes a search term string (result from SearchForm).
   *
   *  Updates searchedTerm state to term.
   */
  function updateSearchTerm(term) {
    if (term !== searchedTerm) {
      setSearchedTerm(term);
      setIsLoading(true); // Note to self: true because we're triggering API call
    }
  }

   /** fetchSearchResultsOnSearchTermChange calls fetchSearchResults async
   *    function.
   *
   *  fetchSearchResults makes an API call for information on jobs. If
   *  jobs is truthy, searches with searchedTerm for a list of jobs
   *  with names similar to searchedTerm. Otherwise, returns all jobs.
   */

   function fetchSearchResultsOnSearchTermChange() {
    async function fetchSearchResults() {
      let queriedJobs;
      if (searchedTerm) {
        queriedJobs = await JoblyApi.searchJobs(searchedTerm);
      } else {
        queriedJobs = await JoblyApi.getJobs();
      }
      setJobs(queriedJobs);
      setIsLoading(false);
    }
    fetchSearchResults();
  }

  useEffect(fetchSearchResultsOnSearchTermChange, [searchedTerm]);

  return (
    <div className="JobList">
      <SearchForm onSubmit={updateSearchTerm} />
      <p>{searchedTerm.length < 1 && isLoading === false
        ? null
        : `Showing results for ${searchedTerm}`}</p>
      {isLoading === true
        ? <div>Loading...</div>
        : <JobCardList jobs={jobs} showCompanyName={true}/>
      }
    </div>
  );

}

export default JobList;