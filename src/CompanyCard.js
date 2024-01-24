
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
 */

function CompanyCard({ company }) {
  // console.log("CompanyCard rendered, company:", company);

  return (
    <div className="CompanyCard">
      <h3>{company.name}</h3>
      <img src={company.logoUrl} alt={company.name}/>
      <p>{company.description}</p>
    </div>
  );
}

export default CompanyCard;