import React, { useContext, useEffect, useState } from "react";
import Hero from "../Hero";
import { JobContext } from "../../context/JobProvider";
import SingleJobCard from "../SingleJobCard";
import { Link } from "react-router-dom";

const Home = () => {
  const { jobs } = useContext(JobContext);
  console.log(jobs);
  return (
    <div>
      <Hero></Hero>

      {/* Featured Jobs */}
      <div className="font-poppins mt-[100px]">
        <div className="text-center">
          <h1 className="text-[#303030] font-semibold text-[40px]">
            {" "}
            Featured Jobs{" "}
          </h1>
          <p className="text-[#5E6670] font-normal	text-[20px]">
            Choose jobs from the top employers and apply for the same.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
            {jobs.slice(0, 6).map((job, index) => (
              // <div
              //   key={index}
              //   className="p-4 border rounded-lg shadow-md hover:shadow-lg transition"
              // >
              //   <h2 className="text-lg text-left font-semibold text-gray-800">
              //     {job.title}
              //   </h2>

              //   <h3 className="text-left font-semibold	text-sm		">
              //     {job.job_type.toUpperCase()}
              //   </h3>
              //   <div className="flex  items-center">
              //     <img
              //       src={job.company_logo}
              //       alt={job.company}
              //       className="w-12 h-12 object-cover rounded-full border"
              //     />
              //     <div className="text-left ml-2">
              //       <p className="text-sm text-gray-500 ">{job.company_name}</p>
              //       <p>{job.candidate_required_location}</p>
              //     </div>
              //   </div>

              //   <p className="text-gray-600">{job.location}</p>
              //   <p className="text-gray-500 mt-2">{job.company}</p>
              //   <div className="flex  justify-around">
              //     <button className="mt-4  text-[#303030] px-4 py-2 rounded border border-[#6300B3]">
              //       View Details
              //     </button>
              //     <button className="mt-4  text-white px-4 py-2 rounded bg-[#6300B3]">
              //       Apply Now{" "}
              //     </button>
              //   </div>
              // </div>

              <div
                key={index}
                className="p-4 border rounded-lg shadow-md hover:shadow-lg transition bg-[#EFE2F8]"
              >
                <SingleJobCard job={job}></SingleJobCard>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <button className="text-white px-4 py-2 rounded bg-[#6300B3]">
            <Link to="/joblist">View All</Link>
          </button>
        </div>
      </div>

      {/* Featured Jobs */}
    </div>
  );
};

export default Home;
