import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filter from "./components/Filter";
import JobLists from "./components/JobLists";
import MyComponent from "./pages/HomePage";
import HomePage from "./pages/HomePage";
import JobDetails from "./pages/JobDetails"
import "./App.css";
import "./index.css"; // or the path to your Tailwind CSS file
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/all-jobs" element={<LandingPage/>} />
        <Route path="/" element={<HomePage />} />
        <Route path="/job-details/:id" element={<JobDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
