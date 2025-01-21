import React from "react";
import { useContext } from "react";
import { JobContext } from "../context/JobProvider";
import { Link, useParams } from "react-router-dom";

const JobDetails = () => {
  const { jobs } = useContext(JobContext);

  const { jobId } = useParams();
  //   const job = jobs.find((job) => job.id === jobId);
  const job = jobs.find((job) => job.id.toString() === jobId);
  if (!job) {
    return <p>Job not found!</p>;
  }
  return (
    // <div className="p-6">
    //   <h1 className="text-2xl font-semibold">{job.title}</h1>
    //   <p className="text-gray-600">{job.description}</p>
    //   <div className="mt-4">
    //     <p>
    //       <strong>Company:</strong> {job.company_name}
    //     </p>
    //     <p>
    //       <strong>Location:</strong> {job.location}
    //     </p>
    //     <p>
    //       <strong>Job Type:</strong> {job.job_type.toUpperCase()}
    //     </p>
    //   </div>
    //   {/* <Link>
    //     <button>Apply Now</button>
    //   </Link> */}
    //   {job.url ? (
    //     <a
    //       href={job.url}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //       className="text-white px-4 py-2 rounded bg-[#6300B3]"
    //     >
    //       Apply Now
    //     </a>
    //   ) : (
    //     <button
    //       className="text-white px-4 py-2 rounded bg-gray-400 cursor-not-allowed"
    //       disabled
    //     >
    //       Apply Not Available
    //     </button>
    //   )}
    // </div>
    <div className="mx-[120px]">
      <div className="flex  items-center">
        <img
          src={job.company_logo_url}
          alt={job.company}
          className="w-12 h-12 object-cover rounded-full border"
        />
        <div className="text-left ml-2">
          <p className="text-sm text-gray-500 ">{job.company_name}</p>
          <p>{job.candidate_required_location}</p>
        </div>
      </div>

      <h1>{job.title}</h1>
      <div className="flex gap-10">
        <h4>{job.job_type.toUpperCase()}</h4>
        <h4>{job.publication_date}</h4>
      </div>
      <h1>Job Description</h1>
      <p className="text-gray-600">{job.description}</p>
    </div>
  );
};

export default JobDetails;
