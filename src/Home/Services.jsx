import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../SupabaseClient";

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [loading, setLoading] = useState(false);
  const name = sessionStorage.getItem("name");
  const navigate = useNavigate();

  const handleClick = () => {
    if (!name) {
      navigate("/login");
    } else {
      setShowModal(true);
    }
  };

  
  const handleSubmit = async () => {
    if (!selectedService) {
      alert("Please select a service.");
      return;
    }

    setLoading(true);
    const date = new Date().toISOString().split("T")[0]; 

    const { data, error } = await supabase
      .from("services")
      .insert([{ service_type: selectedService, name, date, status: "Pending" }]);

    setLoading(false);

    if (error) {
      console.error("Error inserting data:", error);
      alert("Failed to submit request. Please try again.");
    } else {
      alert("Request submitted successfully!");
      setShowModal(false);
      setSelectedService("");
    }
  };

  return (
    <div className="container mx-auto grid grid-cols-1 gap-6 mb-4">
      {/* ALUMNI CARD */}
      <div className="flex bg-gray-50 shadow-sm rounded text-xl border">
        <div className="w-56 bg-gray-200 p-4 flex flex-col items-center justify-center border-r">
          <div className="flex items-center justify-center mb-2">
            <img src="id-card.png" alt="" />
          </div>
          <span className="text-center text-green-800 font-bold font-serif">
            REQUEST ALUMNI CARD
          </span>
        </div>
        <div className="p-4 flex-1">
          <p className="mb-4 leading-tight">
            Apply for your very own CSUan Alumni card online. You can choose to
            apply for a lifetime or annual card.
          </p>
          <p>
            For requirements, please refer{" "}
            <a
              href="#"
              className="text-green-800 font-bold underline"
              onClick={(e) => {
                e.preventDefault();
                handleClick();
              }}
            >
              here.
            </a>
          </p>
        </div>
      </div>

      {/* YEARBOOK */}
      <div className="flex bg-gray-50 shadow-sm rounded text-xl border">
        <div className="w-56 bg-gray-200 p-4 flex flex-col items-center justify-center border-r">
          <div className="flex items-center justify-center mb-2">
            <img src="book.png" alt="" />
          </div>
          <span className="text-center text-green-900 font-bold font-serif">
            REQUEST YEAR BOOK
          </span>
        </div>
        <div className="p-4 flex-1">
          <p className="mb-4 leading-tight">
            Get a copy of your yearbook just register and login here in our
            website and apply for a yearbook claiming.
          </p>
          <p>
            For requirements, please refer{" "}
            <a
              href="#"
              className="text-green-800 font-bold underline"
              onClick={(e) => {
                e.preventDefault();
                handleClick();
              }}
            >
              here.
            </a>
          </p>
        </div>
      </div>

      {/* TOR */}
      <div className="flex bg-gray-50 shadow-sm text-xl border">
        <div className="w-56 bg-gray-200 p-4 flex flex-col items-center justify-center border-r">
          <div className="flex items-center justify-center">
            <img src="tor.png" alt="" className="h-42" />
          </div>
          <span className="text-center text-green-800 font-bold font-serif">
            REQUEST TOR
          </span>
        </div>
        <div className="p-4 flex-1">
          <p className="mb-4 leading-tight">
            Get a copy of your TOR just register and login here in our website
            and request a copy of your transcript of record.
          </p>
          <p>
            For requirements, please refer{" "}
            <a
              href="#"
              className="text-green-800 font-bold underline"
              onClick={(e) => {
                e.preventDefault();
                handleClick();
              }}
            >
              here.
            </a>
          </p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.3)]">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Request Online Service</h2>

            {/* Dropdown for Service Selection */}
            <label className="block text-gray-700 font-semibold mb-2">
              Select Service:
            </label>
            <select
              className="w-full border border-gray-300 p-2 rounded mb-4"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
            >
              <option value="">-- Choose a service --</option>
              <option value="Alumni Card">Alumni Card</option>
              <option value="Year Book">Year Book</option>
              <option value="Transcript of Records">Transcript of Records</option>
            </select>

            {/* Buttons */}
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Close
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
