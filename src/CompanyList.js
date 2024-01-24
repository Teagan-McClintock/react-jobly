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
    console.log("term arrived in CompanyList", term);
    setIsLoading(true); // Note to self: true because we're triggering API call
    setSearchedTerm(term);
  }

  /** fetchSearchResults calls getResults async function.
   *
   *  getResults makes an API call for information on companies. If companies
   *  is truthy, searches with searchedTerm for a list of companies with names
   *  similar to searchedTerm. Otherwise, searches for all companies.
   */
  function fetchSearchResults() {
    async function getResults() {
      console.log("!!!get results was called!, searchedTerm=", searchedTerm);
      let queriedCompanies;
      if (searchedTerm) {
        console.log("+++we should see this when searching arnold");
        queriedCompanies = await JoblyApi.searchCompanies(searchedTerm);
      } else {
        console.log("---we should not see this when searching arnold");
        queriedCompanies = await JoblyApi.getCompanies();
      }
      console.log("these are the companies we queried", queriedCompanies);
      setCompanies(queriedCompanies);
      setIsLoading(false);
    }
    getResults();
  }

  console.log("***this is companies", companies);
  useEffect(fetchSearchResults, [searchedTerm]);

  if (isLoading === true) return <div>Loading...</div>;

  return (
    <div className="companyList">
      <SearchForm onSubmit={updateSearchTerm}/>
      <CompanyCardList companies={companies}/>
    </div>
  );

}

export default CompanyList;