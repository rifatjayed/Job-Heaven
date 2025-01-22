import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // সঠিক প্যাকেজ নাম হতে হবে

import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import SingleJob from "./components/SingleJobCard";
import JobList from "./components/JobList";
import Navbar from "./components/Navbar";
import JobDetails from "./components/JobDetails";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar></Navbar>
        <Home></Home>
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Navbar></Navbar>
        <Login></Login>
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Navbar></Navbar>
        <Register></Register>
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "/joblist",
    element: (
      <>
        <Navbar></Navbar>
        <JobList></JobList>
        <Footer></Footer>
      </>
    ),
  },
  {
    path: "//jobs/:jobId",
    element: (
      <>
        <Navbar></Navbar>
        <JobDetails></JobDetails>
        <Footer></Footer>
      </>
    ),
  },
]);

const App = () => {
  return (
    <div>
      <main className="overflow-x-hidden">
        <RouterProvider router={router} />
      </main>
    </div>
  );
};

export default App;
