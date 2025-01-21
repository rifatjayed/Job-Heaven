import React, { useState } from "react";
import HeroIcon from "../assets/hero.png";
import { CiLocationOn, CiSearch } from "react-icons/ci";

const Hero = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Job Title:", jobTitle);
    console.log("Location:", location);
    // API call বা অন্য কোন কাজ এখানে করতে পারেন
  };
  return (
    <div className="flex flex-col lg:flex-row max-h-[598px] px-6 md:px-12 lg:px-[120px] bg-[#C599E5] py-8 md:py-16 lg:py-[20px] font-poppins">
      <div className=" basis-3/5 flex flex-col	justify-center ">
        <h1 className="text-[34px] md:text-[40px] lg:text-[50px] font-medium	  leading-[40px] md:leading-[48px] lg:leading-[58px]	mb-[16px]">
          Find a job that aligns with your interests and skills
        </h1>
        <p className="text-[16px] md:text-[18px] font-normal	text-[#5E6670] mb-[25px]">
          Thousands of jobs in all the leading sector are waiting for you.
        </p>

        {/* ------------------------------ */}
        <div className="max-w-xl mt-10">
          <form
            onSubmit={handleSearch}
            className="flex items-center  bg-white p-2 shadow-lg rounded-lg"
          >
            {/* Job Title Input */}
            <div className="flex flex-grow justify-center items-center	">
              <CiSearch></CiSearch>
              <input
                type="text"
                placeholder="Job Title"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                className="w-full p-2  rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Location Input */}
            <div className="flex justify-center	items-center	 flex-grow">
              <CiLocationOn />

              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#6300B3] text-white text-[16px] font-semibold	 px-4 py-2 rounded-md "
            >
              Find Job
            </button>
          </form>
        </div>
      </div>
      <div className="lg:basis-2/5 hidden lg:flex  mt-8 lg:mt-0  justify-center items-center	">
        <img src={HeroIcon} />
      </div>
    </div>
  );
};

export default Hero;
