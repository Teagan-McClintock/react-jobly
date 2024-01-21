/**JobCard displays info about a single job
 *
 * props:
 *  - job {id, title, salary, equity, companyHandle, companyName}
 *  - showCompanyName: boolean
 *
 * state: none
 *
 * renders:
 * JobCardList -> JobCard
 *
 */

function JobCard({ job, showCompanyName = false }) {
  return (
    <div className="JobCard">
      <h3>{job.title}</h3>
      {showCompanyName === true && <h4>{job.companyName}</h4>}
      {job.salary && <p>Salary: {job.salary}</p>}
      {job.equity && <p>Equity: {job.equity}</p>}
    </div>
  )
}

export default JobCard;