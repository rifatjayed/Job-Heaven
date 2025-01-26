// import { createContext } from "react";
// import React from "react";

// export const JobContext = createContext();

// const JobProvider = ({ children }) => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://job-server-backend.onrender.com/api/jobs")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setJobs(data.jobs);
//         setLoading(false);
//       })
//       .catch((error) => console.error("Error:", error));
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   const contextValue = { jobs };
//   return (
//     <JobContext.Provider value={contextValue}>{children}</JobContext.Provider>
//   );
// };

// export default JobProvider;

import React, { createContext, useState, useEffect } from "react";

export const JobContext = createContext();

const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://job-server-backend.onrender.com/api/jobs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        return response.json();
      })
      .then((data) => {
        setJobs(data.jobs || []); // Default empty array if no jobs
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Show loading message while fetching data
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
      </div>
    );
  }

  // Show error message if fetching fails
  if (error) {
    return <div>Error: {error}</div>;
  }

  const contextValue = { jobs };

  return (
    <JobContext.Provider value={contextValue}>{children}</JobContext.Provider>
  );
};

export default JobProvider;
