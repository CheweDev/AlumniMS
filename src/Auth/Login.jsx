import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleForgotPassword = () => {};

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row font-serif">
        {/* Left Side - Green Section */}
        <div className="bg-[#0F4F14] text-white p-8 md:w-5/12 flex flex-col">
          <div className="flex-grow flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-8">Hello, CSUan Alumni!</h1>
            <div className="relative mb-8 w-64">
              <img
                src="login-img.png"
                alt="Alumni ID Cards"
                className="w-full h-auto mb-8"
              />
            </div>

            <p className="text-center mb-6">
              Create an account and start your journey with us.
            </p>

            <button
              onClick={handleRegister}
              className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-black py-3 px-6 rounded w-full max-w-xs transition duration-300"
            >
              CREATE AN ACCOUNT
            </button>
          </div>
        </div>

        {/* Right Side - White Section */}
        <div className="bg-white p-8 md:w-7/12 flex flex-col">
          <div className="flex-grow flex flex-col items-center justify-center max-w-md mx-auto w-full">
            <div className="w-full mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Sign in</h2>
              <p className="text-gray-600">Login to manage your account</p>
            </div>

            <form onSubmit={handleSubmit} className="w-full">
              <div className="mb-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaEnvelope className="text-gray-500" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="CSUan@carsu.edu.ph"
                    className="w-full pl-10 pr-3 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaLock className="text-gray-500" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-500" />
                    ) : (
                      <FaEye className="text-gray-500" />
                    )}
                    <span className="ml-1 text-sm">Show</span>
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 text-green-800 focus:ring-green-800 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>

                <button
                  type="button"
                  onClick={handleForgotPassword}
                  className="text-sm text-gray-700 hover:text-green-800"
                >
                  Forgot Password
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-green-700 text-white font-semibold rounded-md shadow-md transition duration-300"
              >
                Sign in
              </button>

              <div className="text-center mt-6 text-sm text-gray-600">
                Don't have account?{" "}
                <button
                  type="button"
                  onClick={handleRegister}
                  className="text-green-800 hover:underline font-medium cursor-pointer"
                >
                  Register Here
                </button>
              </div>
            </form>
          </div>

          <div className="text-center text-xs text-gray-500 mt-8">
            Powered by
            <br />
            Caraga State University Alumni Association
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
