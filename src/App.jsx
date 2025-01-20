import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // সঠিক প্যাকেজ নাম হতে হবে

import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home></Home>
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Login></Login>
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Register></Register>
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
