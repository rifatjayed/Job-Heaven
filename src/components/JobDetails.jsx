import React from "react";
import { useContext } from "react";
import { JobContext } from "../context/JobProvider";
import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { VscLocation } from "react-icons/vsc";
import { LuBriefcaseBusiness } from "react-icons/lu";

import { IoMdTime } from "react-icons/io";

const JobDetails = () => {
  const { jobs } = useContext(JobContext);

  const { jobId } = useParams();
  //   const job = jobs.find((job) => job.id === jobId);
  const job = jobs.find((job) => job.id.toString() === jobId);

  const { description } = job;
  const cleanDescription = DOMPurify.sanitize(description, {
    ALLOWED_TAGS: [],
  });
  if (!job) {
    return <p>Job not found!</p>;
  }

  return (
    <div className="mx-[50px] md:mx-[100px] lg:mx-[120px]">
      <div className="flex  items-center">
        <img
          src={job.company_logo_url}
          alt={job.company}
          className="w-12 h-12 object-cover rounded-full border"
        />
        <div className="text-left ml-2">
          <p className=" text-black font-semibold	 text-[20px]">
            {job.company_name}
          </p>
          <div className="flex items-center	">
            <VscLocation className="text-[20px]" />

            <p className="font-normal	">{job.candidate_required_location}</p>
          </div>
        </div>
      </div>

      <h1 className="text-[25px] text-black font-semibold mt-8">{job.title}</h1>

      <div className="flex gap-10">
        <div className="flex items-center">
          <LuBriefcaseBusiness className="text-[18px]" />
          <h4 className="ml-2">{job.job_type.toUpperCase()}</h4>
        </div>
        <div className="flex items-center">
          <IoMdTime className="text-[18px]" />

          <h4 className="ml-2">{job.publication_date}</h4>
        </div>
      </div>
      <h1 className="mt-[50px] text-[25px] font-bold">Job Description</h1>
      <p className="text-gray-600 mt-2 text-justify	">{cleanDescription}</p>

      {job.salary ? (
        <h3 className="text-[20px] font-semibold mt-5">
          Salary :<span>{job.salary}</span>
        </h3>
      ) : (
        <h3 className="text-[20px] font-semibold mt-5">
          Salary :<span> Contractual</span>
        </h3>
      )}

      <h3 className="mt-6 text-[25px] font-semibold">
        Required Skills & Keywords:{" "}
      </h3>
      <ul className="list-disc	">
        {job.tags.map((tag, index) => (
          <li className="ml-6" key={index}>
            {tag}
          </li>
        ))}
      </ul>

      <a href={job.url} target="_blank" rel="noopener noreferrer">
        <button className="mt-4  text-white px-4 py-2 rounded bg-[#6300B3]">
          Apply Now{" "}
        </button>
      </a>
    </div>
  );
};

export default JobDetails;
