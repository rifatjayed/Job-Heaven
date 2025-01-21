import React, { useContext } from "react";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { JobContext } from "../context/JobProvider";

const JobList = () => {
  const { jobs } = useContext(JobContext);
  console.log(jobs.length);
  return (
    <div className="mx-[120px] mt-[64px]">
      <h1 className="font-semibold	text-[45px]">Job Search</h1>
      <p className="text-[20px] font-normal	text-[#5E6670]">
        Search for your desired job matching your skills
      </p>
      .{/* search form */}
      <div className="max-w-xl mt-10">
        <form className="flex items-center  bg-[#F7F7F7] p-2 shadow-lg rounded-lg">
          {/* Job Title Input */}
          <div className="flex flex-grow justify-center items-center	">
            <CiSearch className="text-[18px]"></CiSearch>
            <input
              type="text"
              placeholder="Job Title"
              className="w-full p-2 bg-[#F7F7F7]  rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Location Input */}
          <div className="flex justify-center	items-center	 flex-grow">
            <CiLocationOn className="text-[18px]" />

            <input
              type="text"
              placeholder="Location"
              className="w-full p-2 bg-[#F7F7F7] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#6300B3] text-white text-[16px] font-semibold	 px-4 py-2 rounded-md mr-4"
          >
            Search
          </button>
        </form>
      </div>
      {/* search form */}
      <div className="flex mt-[100px]">
        {/* left section */}
        <div className="basis-4/12	">
          <h3>Filter</h3>
        </div>

        {/* right section */}
        <div className="basis-8/12">
          <h3>All Jobs({jobs.length})</h3>
        </div>
      </div>
    </div>
  );
};

export default JobList;
