import React from "react";
import { Link } from "react-router-dom";

const SingleJobCard = ({ job }) => {
  console.log(job);
  return (
    <div className="">
      <h2 className="text-lg text-left font-semibold text-gray-800">
        {job.title}
      </h2>
      <h3 className="text-left font-semibold	text-sm		">
        {job.job_type.toUpperCase()}
      </h3>
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
      <p className="text-gray-600">{job.location}</p>
      <p className="text-gray-500 mt-2">{job.company}</p>
      <div className="text-center">
        {/* flex  justify-around */}
        <Link to={`/jobs/${job.id}`}>
          <button className="mt-4  text-[#303030] px-4 py-2 rounded border border-[#6300B3]">
            View Details
          </button>
        </Link>

        {/* <button className="mt-4  text-white px-4 py-2 rounded bg-[#6300B3]">
          Apply Now{" "}
        </button> */}
      </div>
    </div>
  );
};

export default SingleJobCard;
