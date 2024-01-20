import CompanyCard from "./CompanyCard";

/**
 *  CompanyCardList displays all CompanyCard components.
 *
 *  Props:
 *    - companies: an array
 *        [{handle, name, description, numEmployees, logoUrl}, ...]
 *
 *  States: none
 *
 *  Renders:
 *    CompanyList -> CompanyCardList -> CompanyCard
 */

function CompanyCardList({ companies }) {
  console.log("CompanyCardList rendered companies prop:", companies);


  return (
    <div className="CompanyCard">
      {companies.map(company => <CompanyCard company={company} />)}
    </div>
  );
}

export default CompanyCardList;