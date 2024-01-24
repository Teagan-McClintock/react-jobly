import { useNavigate } from 'react-router-dom'; // check


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

export default CompanyCard;

/**
 *
 * CompanyCard click: show the details on that company
 * CompanyDetail
 *
 *
 *
 *
 *
 */