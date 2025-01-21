import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import JobProvider, { JobContext } from "./context/JobProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <JobProvider>
      <App />
    </JobProvider>
  </StrictMode>
);
