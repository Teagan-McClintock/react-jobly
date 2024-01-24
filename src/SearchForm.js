/**
 *  SearchForm lets user search for some information by showing a form that
 *  processes a user-input search term.
 *
 *  Props:
 *    - onSubmit, a callback function that takes the string of the search term
 *
 *  States:
 *    - formData, a string
 *
 *  Renders:
 *    - {Joblist, CompanyList} -> SearchForm
 *
 */
function SearchForm({ onSubmit }) {
  console.log("SearchForm rendered, onSubmit prop:", onSubmit);
  console.log("onSubmit should be undefined for now");

  return (
    <p>This will be a search form. You will be able to look for things!</p>
  );
}

export default SearchForm;