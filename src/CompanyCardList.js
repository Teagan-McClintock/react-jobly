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
    <div>
      <CompanyCard />
    </div>
  );
}

export default CompanyCardList;