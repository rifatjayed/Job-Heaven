import React, { useContext, useState } from "react";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { JobContext } from "../context/JobProvider";
import SingleJobCard from "./SingleJobCard";

const JobList = () => {
  const { jobs } = useContext(JobContext);

  const jobTypes = ["full_time", "part_time", "contract"];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = jobs.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentItems);

  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);
  const visiblePages = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <div className="mx-[50px] md:mx-[100px] lg:mx-[120px] mt-[64px]">
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
      <div className="flex mt-[100px] ">
        {/* left section */}
        <div>
          <h3>Filter</h3>
        </div>

        {/* <div className="basis-4/12 bg-[#F2F2F2]	">
          <div className="p-4">
            <label className="text-lg font-semibold mb-2 block">
              Job Type:
            </label>
            <div className="flex flex-col gap-2">
              {jobs.job_type.map((type) => (
                <label key={type.value} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={type.value}
                    // checked={selectedOptions.includes(type.value)}
                    // onChange={handleCheckboxChange}
                    className="accent-blue-600"
                  />
                  check
                </label>
              ))}
            </div>
          </div>
        </div> */}

        <div className="basis-4/12 bg-[#F2F2F2]	mr-[40px] mt-[50px] rounded-xl p-8">
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Job Type:</h2>
            {jobTypes.map((type) => (
              <div key={type} className="mb-2">
                <label>
                  <input
                    type="checkbox"
                    // value={type}
                    // onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  {type.replace("_", " ").toUpperCase()}
                </label>
              </div>
            ))}
          </div>
        </div>
        {/* right section */}
        <div className="basis-8/12">
          <h3>All Jobs({jobs.length})</h3>

          <div className="grid grid-cols-1 md:grid-cols-2  gap-6 p-6">
            {currentItems.map((job, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow-md hover:shadow-lg transition bg-[#EFE2F8]"
              >
                <SingleJobCard job={job}></SingleJobCard>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Pagination */}
      <div className="flex justify-center">
        <div className="btn-group">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="btn"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {visiblePages.map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`btn ${page === currentPage ? "btn-active" : ""}`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="btn"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobList;
