import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="bg-green-900 text-white p-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0 font-serif">
          <div className="w-14 h-14 bg-white rounded-full mr-3 flex items-center justify-center">
            <img
              src="logo.png"
              alt="CSU Logo"
              className="rounded-full w-12 h-12"
            />
          </div>
          <div className="tracking-widest">
            <h1 className="text-2xl font-bold">Caraga State University</h1>
            <p className="text-sm font-semibold">Alumni Association</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <div className="relative w-72 sm:w-96">
            <input
              type="text"
              placeholder="Search.."
              className="w-full px-3 py-2 rounded-md text-black bg-white"
            />
            <button className="absolute right-0 top-0 h-full bg-yellow-500 px-3 rounded-r-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          <div className="flex gap-2 mt-2 sm:mt-0">
            <button
              className="btn btn-warning text-white"
              onClick={handleNavigate}
            >
              Register
            </button>
            <button className="btn" onClick={handleLogin}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
