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

  return (
    <p>Companies!</p>
  );

}

export default CompanyList;