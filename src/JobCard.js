/**JobCard displays info about a single job
 *
 * props: job {id, title, salary, equity, companyHandle, companyName}
 *
 * state: none
 *
 * renders:
 * JobCardList -> JobCard
 *
 */

function JobCard({ job }) {
  return (
    <div className="JobCard">
      <p>This is a job card</p>
    </div>
  )
}

export default JobCard;