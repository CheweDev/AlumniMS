import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiMail, FiUser } from "react-icons/fi";
import supabase from "../SupabaseClient";

const Navbar = () => {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const name = sessionStorage.getItem("name");

  const fetchNotifications = async () => {
    if (name) {
      // Replace with actual Supabase fetch call
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('name', name)
        .neq('status', 'Pending');

      if (error) {
        console.error(error.message);
      } else {
        setNotifications(data);
      }
    }
  };

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

  const handleMailClick = () => {
    fetchNotifications();
    setShowModal(true);
  };

  return (
    <div className="bg-green-900 text-white p-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center mb-4 md:mb-0 font-serif">
          <div className="w-14 h-14 bg-white rounded-full mr-3 flex items-center justify-center">
            <img src="logo.png" alt="CSU Logo" className="rounded-full w-12 h-12" />
          </div>
          <div className="tracking-widest">
            <h1 className="text-2xl font-bold">Caraga State University</h1>
            <p className="text-sm font-semibold">Alumni Association</p>
          </div>
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-6 relative">
          {/* Mail Icon */}
          <FiMail 
            className="text-2xl cursor-pointer hover:text-gray-300" 
            onClick={handleMailClick} 
          />
          
          {/* User Icon with Logout */}
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

      {/* Modal to Display Notifications */}
      {showModal && (
        <div className="text-black fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.3)]">
          <div className="bg-white p-6 rounded shadow-lg w-100">
            <h2 className="text-xl font-bold mb-4">Notifications</h2>

            {notifications.length === 0 ? (
              <p>No notifications available.</p>
            ) : (
              <ul>
                {notifications.map((notification) => (
                  <li key={notification.id} className="mb-2">
                    <div className="flex flex-col bg-gray-100 p-4 rounded">
                      <p className="text-lg font-semibold">Your request for {notification.service_type} is {notification.status}</p>
                      <p className="text-sm">Note: {notification.note}</p>
                      <p className="text-sm">{notification.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
