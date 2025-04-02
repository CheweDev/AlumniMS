import { useState, useEffect } from "react";
import supabase from "../SupabaseClient";
import { useNavigate } from "react-router-dom";
import JobDetailsModal from "./JobDetailsModal"; // Import the new modal component

const Careers = ({hideButton}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  // New state for modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const { data } = await supabase.from("jobs")
    .select("*")
    .eq("status", "Approved");
    setJobs(data);
  };
 
  // Open modal with selected job
  const openJobDetails = (jobId) => {
    setSelectedJobId(jobId);
    setModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Number of cards to display at once
  const getCardsToShow = () => {
    // We'll use window.innerWidth in a real app, but for this example:
    return 3; // Show 3 cards at a time on desktop
  };

  const cardsToShow = getCardsToShow();

  // Prev
  const goToPrevious = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(newIndex);
  };

  // Next
  const goToNext = () => {
    const newIndex = Math.min(currentIndex + 1, jobs.length - cardsToShow);
    setCurrentIndex(newIndex);
  };

  // Get the current visible jobs
  const visibleJobs = jobs.slice(currentIndex, currentIndex + cardsToShow);

  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
  
    return `${month}-${day}-${year}`;
  };
  
  return (
    <>
      {/* Banner Section */}
      <div className="relative w-full h-[400px] overflow-hidden font-serif">
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
            <p className="text-white text-sm md:text-base mb-5">
              Your complete guide to a career with your university degree.
            </p>
            {!hideButton && (
        <button className="bg-white text-green-900 px-4 py-2 rounded flex items-center w-fit cursor-pointer"
        onClick={() => navigate("/user-posting")}>
          <span className="mr-2 font-bold">+</span>
          Post a job
        </button>
      )}
          </div>
        </div>
      </div>

      {/* Job Carousel Section */}
      <div className="py-6 px-4">
        <div className="relative">
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 shadow-md ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "bg-green-900"
            }`}
            aria-label="Previous jobs"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-8">
            {visibleJobs.map((job) => (
              <div
                key={job.id}
                className="bg-gray-100 shadow-md border border-green-700 rounded-md flex flex-col"
              >
                <div className="p-4 flex items-center">
                  <img
                    src={job.logo || "/placeholder.svg"}
                    alt={`${job.company} logo`}
                    className="w-12 h-12 object-contain mr-3"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-green-900">
                      {job.company_name}
                    </h3>
                    <span className="text-gray-500 text-sm">{formatDate(job.created_at)}</span>
                  </div>
                </div>
                <div className="p-4 flex-1">
                  {job.description && (
                    <p className="text-gray-700 text-sm min-h-[60px]">
                      {job.description}
                    </p>
                  )}
                </div>
                  <div className="p-4 flex justify-end items-center gap-2 border-t mt-auto">
                    <button
                      onClick={() => openJobDetails(job.id)}
                      className="text-green-900 text-sm font-bold rounded-full bg-gray-200 px-4 py-2 border"
                    >
                      Details
                    </button>
                    <a
                      href={job.applyLink}
                      className="bg-green-900 text-white px-4 py-2 rounded-full text-sm hover:bg-green-800"
                    >
                      Apply Now
                    </a>
                  </div>
              </div>
            ))}
          </div>
          <button
            onClick={goToNext}
            disabled={currentIndex >= jobs.length - cardsToShow}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full p-2 shadow-md ${
              currentIndex >= jobs.length - cardsToShow
                ? "opacity-50 cursor-not-allowed"
                : "bg-green-900"
            }`}
            aria-label="Next jobs"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal Component */}
      <JobDetailsModal 
        isOpen={modalOpen}
        onClose={closeModal}
        jobId={selectedJobId}
      />
    </>
  );
};

export default Careers;