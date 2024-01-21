import { useNavigate, Link } from 'react-router-dom'; // check
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
    <Link className="CompanyCard" to={`/companies/${company.handle}`}>
      <h3>{company.name}</h3>
      {company.logoUrl && <img src={company.logoUrl} alt={company.name}/>}
      <p>{company.description}</p>
    </Link>
  );
}

export default CompanyCard;
