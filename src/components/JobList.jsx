import React, { useContext, useState } from "react";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { JobContext } from "../context/JobProvider";
import SingleJobCard from "./SingleJobCard";
import { IoFilter } from "react-icons/io5";

const JobList = () => {
  const { jobs } = useContext(JobContext);

  const filter = {
    jobTypes: ["full_time", "part_time", "contract"],
    jobLocation: ["USA", "India", "Europe", "Pakistan", "Australia"],
    category: ["Human Resources", "Engineering"],
  };

  const [filterMenu, setFilterMenu] = useState(false);
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
      <div className="md:flex sm:block mt-[100px] ">
        <button className="flex md:hidden items-center ">
          <IoFilter />
          <span className="ml-2">Filter </span>
        </button>
        {/* left section */}

        {/* <div></div>
        <div>
          <h3>Filter</h3>
        </div> */}

        <div className="basis-4/12 bg-[#F2F2F2]	mr-[40px] mt-[50px] rounded-xl p-8 hidden lg:block">
          {/* job type filter */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Job Type:</h2>
            {filter.jobTypes.map((type) => (
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

          <hr className="border-t-2 border-[#ACB2B9] my-10" />
          {/* job location filter */}

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Location</h2>
            {filter.jobLocation.map((location) => (
              <div key={location} className="mb-2">
                <label>
                  <input
                    type="checkbox"
                    // value={type}
                    // onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  {location}
                </label>
              </div>
            ))}
          </div>

          <hr className="border-t-2 border-[#ACB2B9] my-10" />

          {/* categorises search filter */}

          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Job Type:</h2>
            {filter.category.map((item) => (
              <div key={item} className="mb-2">
                <label>
                  <input
                    type="checkbox"
                    // value={type}
                    // onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>
        {/* right section */}
        <div className="basis-8/12">
          <h3>All Jobs({jobs.length})</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4  md:gap-6 p-3 md:p-6">
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
