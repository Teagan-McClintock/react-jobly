import SearchForm from "./SearchForm";
import CompanyCardList from "./CompanyCardList";
import { useState, useEffect } from "react";
import JoblyApi from "./api";

/**CompanyList does the following:
 * - renders SearchForm
 * - make fetch request to get information about searched term
 *
 * props: none
 *
 * states:
 * - companies: an array
 *    [{handle, name, description, numEmployees, logoUrl}, ...]
 * - isLoading: a boolean
 * - searchedTerm: a string (for what was most recently searched)
 *
 * renders:
 * RoutesList -> CompanyList -> SearchForm
 * RoutesList -> CompanyList -> CompanyCardList
 *
 * Authorization required: logged-in (handled in RoutesList)
 */

function CompanyList() {
  console.log("CompanyList rendered, took no props");
  const [companies, setCompanies] = useState();
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
   *  fetchSearchResults makes an API call for information on companies. If
   *  companies is truthy, searches with searchedTerm for a list of companies
   *  with names similar to searchedTerm. Otherwise, returns all companies.
   */

  function fetchSearchResultsOnSearchTermChange() {
    async function fetchSearchResults() {
      let queriedCompanies;
      if (searchedTerm) {
        queriedCompanies = await JoblyApi.searchCompanies(searchedTerm);
      } else {
        queriedCompanies = await JoblyApi.getCompanies();
      }
      setCompanies(queriedCompanies);
      setIsLoading(false);
    }
    fetchSearchResults();
  }

  useEffect(fetchSearchResultsOnSearchTermChange, [searchedTerm]);

  return (
    <div className="companyList">
      <SearchForm onSubmit={updateSearchTerm}/>
      <p>{searchedTerm.length < 1 && isLoading === false
        ? null
        : `Showing results for ${searchedTerm}`}</p>
      {isLoading === true
        ? <div>Loading...</div>
        : <CompanyCardList companies={companies}/>}
    </div>
  );

}
// might want ternary (if no companies, let user know or could do it in
//other place)
export default CompanyList;