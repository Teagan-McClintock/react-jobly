import JobCard from "./JobCard";

/**JobCardList holds and displays a list of JobCards
 *
 * props:
 *  - jobs [{id, title, salary, equity, companyHandle, companyName},...]
 *  - showCompanyName: boolean
 *
 *
 * state: none
 *
 * renders:
 * JobList -> JobCardList -> JobCard
 *
 */

function JobCardList({ jobs, showCompanyName = false }) {
  console.log("JobCardList rendered, jobs prop:", jobs);

  return (
    <div className="JobCardList">
      {Object.keys(jobs).length > 0
        ? jobs.map(job =>
            <JobCard
              job={job}
              key={job.id}
              showCompanyName={showCompanyName}
            />)
        : <p>Sorry, no results found...</p>
      }
    </div>
  );
}

export default JobCardList;