import SearchForm from "./SearchForm";
import CompanyCardList from "./CompanyCardList";
import { useState } from "react";
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

  function fetchSearchResults() {
    async function getResults() {
      const companies = await JoblyApi.searchCompanies(searchedTerm);
      setCompanies(companies);
      setIsLoading(false);
    }
    getResults();
  }

  useEffect(fetchSearchResults, [searchedTerm]);

  if (isLoading === true) return <div>Loading...</div>;

  return (
    <div className="companyList">
      <SearchForm />
      <CompanyCardList companies={companies}/>
    </div>
  );

}

export default CompanyList;