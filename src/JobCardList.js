import JobCard from "./JobCard";

/**JobCardList holds and displays a list of JobCards
 *
 * props: jobs [{id, title, salary, equity, companyHandle, companyName},...]
 *
 * state: none
 *
 * renders:
 * JobList -> JobCardList -> JobCard
 *
 */

function JobCardList({ jobs }) {
  console.log("JobCardList rendered, jobs prop:", jobs);

  return (
    <div className="JobCardList">
      {jobs.map(job => <JobCard job={job} key={job.id} />)}
    </div>
  )
}

export default JobCardList;