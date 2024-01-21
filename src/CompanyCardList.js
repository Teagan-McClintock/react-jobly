import CompanyCard from "./CompanyCard";
import './CompanyCardList.css';

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
  // console.log("CompanyCardList rendered companies prop:", companies);


  return (
    <div className="CompanyCardList">
      {companies.map(company => <CompanyCard
        company={company}
        key={company.handle}/>)
      }
    </div>
  );
}

export default CompanyCardList;