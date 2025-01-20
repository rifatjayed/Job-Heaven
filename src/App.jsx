import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Remote Jobs</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h2>{job.title}</h2>
            <p>Company: {job.company_name}</p>
            <p>Category: {job.category}</p>
            <a href={job.url} target="_blank" rel="noopener noreferrer">
              View Job
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
