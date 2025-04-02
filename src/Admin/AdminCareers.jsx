import Navbar from "./Navbar";
import Header from "./Header";
import React, { useState, useEffect } from "react";
import supabase from "../SupabaseClient";

const AdminCareers = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetchJobs();
      }, []);
      
      const fetchJobs = async () => {
        const { data } = await supabase.from("jobs")
        .select("*")
        .eq("status", "Pending");
        setJobs(data);
      };

      const updateJobStatus = async (jobId, newStatus) => {
        const { error } = await supabase
          .from("jobs")
          .update({ status: newStatus })
          .eq("id", jobId);
      
        if (error) {
          console.error("Error updating job status:", error.message);
        } else {
          console.log(`Job ${jobId} status updated to ${newStatus}`);
          window.location.reload();
        }
      };

  return (
    <>
      <Navbar />
      <Header />
      <div className="relative w-full h-[200px] overflow-hidden font-serif">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('img-overlay.png')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-green-900/80 to-green-900/40"></div>
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4">
          <div className="max-w-lg tracking-wide">
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              CSU CAREERS
            </h1>
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-5">
              JOBS AND OPPORTUNITIES
            </h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
  <div className="overflow-x-auto">
    {jobs && jobs.length > 0 ? (
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-3 text-left bg-green-800 text-white border border-green-900">Company</th>
            <th className="p-3 text-left bg-green-800 text-white border border-green-900">Requirements</th>
            <th className="p-3 text-left bg-green-800 text-white border border-green-900">Description</th>
            <th className="p-3 text-left bg-green-800 text-white border border-green-900">Date</th>
            <th className="p-3 text-left bg-green-800 text-white border border-green-900">Apply Link</th>
            <th className="p-3 text-left bg-green-800 text-white border border-green-900">Action</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="p-3 border">{job.company}</td>
              <td className="p-3 border">{job.requirements}</td>
              <td className="p-3 border">{job.description}</td>
              <td className="p-3 border">{job.date}</td>
              <td className="p-3 border">{job.applyLink}</td>
              <td className="p-3 border text-center">
                <div className="flex justify-center gap-2">
                  <button 
                    className="bg-green-500 text-white px-4 py-2 rounded w-24 text-sm font-semibold hover:bg-green-600"
                    onClick={() => updateJobStatus(job.id, "Approved")}
                  >
                    Accept
                  </button>
                  <button 
                    className="bg-red-500 text-white px-4 py-2 rounded w-24 text-sm font-semibold hover:bg-red-600"
                    onClick={() => updateJobStatus(job.id, "Rejected")}
                  >
                    Reject
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p className="text-center text-gray-600 text-lg font-semibold">No Job Posting</p>
    )}
  </div>
</div>

    </>
  );
};

export default AdminCareers;