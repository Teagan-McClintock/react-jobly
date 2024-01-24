
/**
 *  CompanyCard shows information about a single company.
 *
 *  Props:
 *    - company: an object
 *        {handle, name, description, numEmployees, logoUrl}
 *
 *  States: none
 *
 *  Renders:
 *    CompanyCardList -> CompanyCard
 *
 */
function CompanyCard({ company }) {
  console.log("CompanyCard rendered, company:", company);

  return (
    <p>A CompanyCard rendered. Yay!</p>
  );
}

export default CompanyCard;