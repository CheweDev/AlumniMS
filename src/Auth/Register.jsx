import { useState } from "react";
import Navbar from "../Home/Navbar";
import { RiCustomerService2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import {
  FaExclamationCircle,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    idNumber: "",
    yearGraduated: "",
    firstName: "",
    middleName: "",
    lastName: "",
    college: "",
    program: "",
    birthDate: "",
    gender: "",
    emailAddress: "",
    contactNumber: "",
    currentAddress: "",
    privacyAgreement: false,
  });

  const [errors, setErrors] = useState({});
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const colleges = [
    "College of Education",
    "College of Engineering and GeoSciences",
    "College of Humanities and Social Sciences",
    "College of Forestry and Environmental Sciences",
    "College of Mathematics and Natural Sciences",
    "College of Agriculture and Agri-Industries",
    "College of Computing and Information Sciences",
  ];
  const programs = [
    "Bachelor of Science",
    "Bachelor of Arts",
    "Master of Science",
    "Master of Arts",
  ];
  const genders = ["Male", "Female", "Non-binary", "Prefer not to say"];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      "idNumber",
      "yearGraduated",
      "firstName",
      "lastName",
      "college",
      "program",
      "birthDate",
      "gender",
      "emailAddress",
      "contactNumber",
      "currentAddress",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
      }
    });

    // Email validation
    if (formData.emailAddress && !/\S+@\S+\.\S+/.test(formData.emailAddress)) {
      newErrors.emailAddress = "Please enter a valid email address";
    }

    // Year validation
    if (formData.yearGraduated && !/^\d{4}$/.test(formData.yearGraduated)) {
      newErrors.yearGraduated = "Please enter a valid year (YYYY)";
    }

    // Privacy agreement validation
    if (!formData.privacyAgreement) {
      newErrors.privacyAgreement = "You must agree to the privacy policy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowConfirmModal(true);
    }
  };

  //simulation
  const confirmSubmission = () => {
    setShowConfirmModal(false);
    setTimeout(() => {
      setShowSuccessModal(true);
    }, 500);
  };

  const closeModals = () => {
    setShowConfirmModal(false);
    setShowSuccessModal(false);
  };

  const handleNavigate = () => {
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <div className=" p-4">
        <div className="bg-white shadow-md rounded-md overflow-hidden border-t-4 border-green-800">
          <div className="border-b border-green-800">
            <h1 className="text-2xl font-bold p-4 text-green-800 tracking-wide font-serif">
              Alumni Registration Form
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information Section */}
              <div className="bg-green-50 p-10 rounded-md">
                <h2 className="text-xl font-bold text-green-800 mb-4 tracking-tight">
                  Personal Information
                </h2>

                <div className="space-y-4">
                  <div className="flex justify-between gap-3">
                    <input
                      type="text"
                      name="idNumber"
                      value={formData.idNumber}
                      onChange={handleChange}
                      placeholder="ID Number"
                      className={`w-full p-2 border rounded-md ${
                        errors.idNumber ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.idNumber && (
                      <FaExclamationCircle className="absolute right-3 top-3 text-red-500" />
                    )}
                    <input
                      type="text"
                      name="yearGraduated"
                      value={formData.yearGraduated}
                      onChange={handleChange}
                      placeholder="Year Graduated"
                      className={`w-full p-2 border rounded-md ${
                        errors.yearGraduated
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.yearGraduated && (
                      <FaExclamationCircle className="absolute right-3 top-3 text-red-500" />
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className={`w-full p-2 border rounded-md ${
                        errors.firstName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.firstName && (
                      <FaExclamationCircle className="absolute right-3 top-3 text-red-500" />
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      name="middleName"
                      value={formData.middleName}
                      onChange={handleChange}
                      placeholder="Middle Name (Optional)"
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className={`w-full p-2 border rounded-md ${
                        errors.lastName ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.lastName && (
                      <FaExclamationCircle className="absolute right-3 top-3 text-red-500" />
                    )}
                  </div>

                  <div className="relative">
                    <select
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded-md appearance-none ${
                        errors.college ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="" disabled>
                        College
                      </option>
                      {colleges.map((college, index) => (
                        <option key={index} value={college}>
                          {college}
                        </option>
                      ))}
                    </select>
                    <FaChevronDown className="absolute right-3 top-3 text-green-800" />
                  </div>

                  <div className="relative">
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded-md appearance-none ${
                        errors.program ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="" disabled>
                        Program
                      </option>
                      {programs.map((program, index) => (
                        <option key={index} value={program}>
                          {program}
                        </option>
                      ))}
                    </select>
                    <FaChevronDown className="absolute right-3 top-3 text-green-800" />
                  </div>

                  <div className="relative">
                    <input
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded-md ${
                        errors.birthDate ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {/* <FaCalendarAlt className="absolute right-3 top-3 text-green-800" /> */}
                  </div>

                  <div className="relative">
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded-md appearance-none ${
                        errors.gender ? "border-red-500" : "border-gray-300"
                      }`}
                    >
                      <option value="" disabled>
                        Gender
                      </option>
                      {genders.map((gender, index) => (
                        <option key={index} value={gender}>
                          {gender}
                        </option>
                      ))}
                    </select>
                    <FaChevronDown className="absolute right-3 top-3 text-green-800" />
                  </div>
                </div>
              </div>

              {/* Contact Information Section */}
              <div className="bg-green-50 p-10 rounded-md">
                <h2 className="text-xl font-bold text-green-800 mb-4 tracking-tight">
                  Contact Information
                </h2>

                <div className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className={`w-full p-2 border rounded-md ${
                        errors.emailAddress
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.emailAddress && (
                      <FaExclamationCircle className="absolute right-3 top-3 text-red-500" />
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      placeholder="Contact Number"
                      className={`w-full p-2 border rounded-md ${
                        errors.contactNumber
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.contactNumber && (
                      <FaExclamationCircle className="absolute right-3 top-3 text-red-500" />
                    )}
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      name="currentAddress"
                      value={formData.currentAddress}
                      onChange={handleChange}
                      placeholder="Current Address"
                      className={`w-full p-2 border rounded-md ${
                        errors.currentAddress
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    {errors.currentAddress && (
                      <FaExclamationCircle className="absolute right-3 top-3 text-red-500" />
                    )}
                  </div>

                  <div className="mt-8">
                    <div
                      className={`flex items-start ${
                        errors.privacyAgreement ? "text-red-500" : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        name="privacyAgreement"
                        checked={formData.privacyAgreement}
                        onChange={handleChange}
                        className="mt-1 mr-2"
                      />
                      <span>
                        I have read and agree to the{" "}
                        <span className="text-green-800 font-semibold">
                          Privacy Information for Alumni
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="mt-20 flex justify-center">
                    <button
                      type="submit"
                      className="btn bg-green-800 text-white hover:bg-green-700 transition duration-300 font-semibold"
                    >
                      SUBMIT REGISTRATION
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Confirmation Modal */}
        {showConfirmModal && (
          <div className="fixed inset-0 backdrop-blur-xs bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full overflow-hidden">
              <div className="bg-green-800 p-4 relative flex justify-center">
                <img
                  src="logo.png"
                  alt="University Logo"
                  className="h-12 w-12 rounded-full bg-white p-1"
                />
                <button
                  onClick={closeModals}
                  className="absolute right-2 top-2 font-bold rounded-full bg-opacity-20 bg-white h-8 w-8 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
              <div className="p-10 text-center">
                <p className="mb-10 text-xl">
                  Are you sure you want to submit?
                </p>
                <button
                  onClick={confirmSubmission}
                  className="btn bg-green-800 w-1/2 text-white rounded-full hover:bg-green-700"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 backdrop-blur-xs bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-md w-full overflow-hidden">
              <div className="bg-green-800 p-4 relative flex justify-center">
                <img
                  src="logo.png"
                  alt="University Logo"
                  className="h-12 w-12 rounded-full bg-white p-1"
                />
                <button
                  onClick={closeModals}
                  className="absolute right-2 top-2 font-bold rounded-full bg-opacity-20 bg-white h-8 w-8 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <p className="mb-10 text-xl">Account created successfully</p>
                <button
                  onClick={handleNavigate}
                  className="w-1/2 btn bg-green-800 text-white rounded-md hover:bg-green-700"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Chat Support Button */}
        <div className="fixed bottom-6 right-6">
          <button className="bg-yellow-400 rounded-full cursor-pointer p-5 shadow-lg hover:bg-yellow-300 transition duration-300">
            <RiCustomerService2Fill size={30} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
