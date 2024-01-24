

/**
 *  JobList does the following:
 *    - define onSubmit for SearchForm
 *    - make fetch request to get information about searched term
 *
 *  Props: none
 *
 *  States: jobs, isLoading, searchedTerm
 *
 *  Renders:
 *    RoutesList -> JobList -> JobCardList
 *    RoutesList -> JobList -> SearchForm
 *
 */
function JobList() {
  console.log("JobList rendered, took no props");

  return (
    <p>Jobs!</p>
  );

}

export default JobList;