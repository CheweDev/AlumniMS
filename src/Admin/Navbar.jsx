import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();
    const [showLogout, setShowLogout] = useState(false);

  const handleNavigate = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  
  const handleLogout = () => {
    // Implement logout logic here (clear tokens, etc.)
    console.log("User logged out");
    setShowLogout(false);
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

          <div className="relative">
                    <FiUser
                      className="text-2xl cursor-pointer hover:text-gray-300"
                      onClick={() => setShowLogout(!showLogout)}
                    />
                    {showLogout && (
                      <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg">
                        <button
                          onClick={handleLogout}
                          className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                        >
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
      </div>
    </div>
  );
};

export default Navbar;
