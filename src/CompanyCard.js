import { useNavigate } from 'react-router-dom'; // check
import "./CompanyCard.css"

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

  const navigate = useNavigate();

  function showCompanyDetails() {
    navigate(`/companies/${company.handle}`);
  }

  return (
    <div className="CompanyCard" onClick={showCompanyDetails}>
      <h3>{company.name}</h3>
      <img src={company.logoUrl} alt={company.name}/>
      <p>{company.description}</p>
    </div>
  );
}
// replace div's onClick with a Link tag (that's what is messing with the
// pointer hand) "/companies/:handle"

// also check if that company logo url exists (if not, don't show it)
// and if it does exist, show it
export default CompanyCard;
