import { useState } from "react";

// Sample job data
const jobs = [
  {
    id: 1,
    company: "AIR BNB INTERNATIONAL",
    logo: "logo.png",
    date: "January 16, 2023",
    requirements: [
      "Knowledge in MS Office Application",
      "Can pay attention to details",
      "Can work with minimal supervision",
    ],
    applyLink: "https://airbnb.jobs/hiring",
    color: "bg-red-100",
  },
  {
    id: 2,
    company: "QATAR AIRWAYS",
    logo: "logo.png",
    date: "February 10, 2023",
    description:
      "The Qatar Airways is in need of qualified mobile application developer with the following fields of specialization:",
    specializations: ["Flutter", "Firebase"],
    applyLink: "https://qatarairways/job/hiring",
    color: "bg-blue-100",
  },
  {
    id: 3,
    company: "PLDT Main Branch",
    logo: "logo.png",
    date: "January 19, 2022",
    description:
      "The PLDT Main Branch is in need of a full-time faculty member. Click the button below for more details.",
    applyLink: "https://pldtphilippines/job/hiring",
    color: "bg-red-100",
  },
  {
    id: 4,
    company: "GLOBE TELECOM",
    logo: "logo.png",
    date: "March 5, 2023",
    requirements: [
      "Experience in network administration",
      "CCNA certification is an advantage",
      "Willing to work on shifting schedules",
    ],
    applyLink: "https://globe.com.ph/careers",
    color: "bg-blue-100",
  },
  {
    id: 5,
    company: "AMAZON Web Services",
    logo: "logo.png",
    date: "April 12, 2023",
    description:
      "Amazon Web Services is looking for cloud engineers with experience in:",
    specializations: ["AWS Lambda", "DynamoDB", "CloudFormation"],
    applyLink: "https://aws.amazon.com/careers",
    color: "bg-yellow-100",
  },
  {
    id: 6,
    company: "MICROSOFT Philippines",
    logo: "logo.png",
    date: "February 28, 2023",
    description:
      "Microsoft Philippines is hiring software engineers for their Manila office.",
    requirements: [
      "Strong in C# and .NET development",
      "Experience with Azure services",
      "Good communication skills",
    ],
    applyLink: "https://careers.microsoft.com",
    color: "bg-green-100",
  },
];

const Careers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
            <button className="bg-white text-green-900 px-4 py-2 rounded flex items-center w-fit cursor-pointer">
              <span className="mr-2 font-bold">+</span>
              Post a job
            </button>
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
                      {job.company}
                    </h3>
                    <span className="text-gray-500 text-sm">{job.date}</span>
                  </div>
                </div>
                <div className="p-4 flex-1">
                  {job.description && (
                    <p className="text-gray-700 text-sm min-h-[60px]">
                      {job.description}
                    </p>
                  )}

                  {job.requirements && (
                    <div className="mt-2">
                      <h4 className="text-gray-800 text-sm font-semibold">
                        Requirements:
                      </h4>
                      <ul className="list-disc pl-5 text-gray-700 text-sm min-h-[60px]">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {job.specializations && (
                    <div className="mt-2">
                      <h4 className="text-gray-800 text-sm font-semibold">
                        Specializations:
                      </h4>
                      <ul className="list-disc pl-5 text-gray-700 text-sm min-h-[60px]">
                        {job.specializations.map((spec, index) => (
                          <li key={index}>{spec}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                {job.applyLink && (
                  <div className="p-4 flex justify-end items-center gap-2 border-t mt-auto">
                    <a
                      href={job.applyLink}
                      className="text-green-900 text-sm font-bold rounded-full bg-gray-200 px-4 py-2 border"
                    >
                      Details
                    </a>
                    <a
                      href={job.applyLink}
                      className="bg-green-900 text-white px-4 py-2 rounded-full text-sm hover:bg-green-800"
                    >
                      Apply Now
                    </a>
                  </div>
                )}
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
    </>
  );
};

export default Careers;
