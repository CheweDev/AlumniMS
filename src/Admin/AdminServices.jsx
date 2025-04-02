import Navbar from "./Navbar";
import Header from "./Header";
import React, { useState, useEffect } from "react";
import supabase from "../SupabaseClient";

const AdminServices = () => {
  const [services, setServices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [newStatus, setNewStatus] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    const { data } = await supabase
      .from("services")
      .select("*")
      .eq("status", "Pending");
    setServices(data);
  };

  const openModal = (service, status) => {
    setSelectedService(service);
    setNewStatus(status);
    setNote(""); // Reset note input
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    setNewStatus("");
    setNote("");
  };

  const updateStatus = async () => {
    if (!selectedService) return;

    const { error } = await supabase
      .from("services")
      .update({ status: newStatus, note }) // Storing note in DB (optional)
      .eq("id", selectedService.id);

    if (error) {
      console.error("Error updating job status:", error.message);
    } else {
      console.log(`Service ${selectedService.id} status updated to ${newStatus}`);
      closeModal();
      fetchServices(); // Refresh data after update
    }
  };

  return (
    <>
      <Navbar />
      <Header />
      <div className="relative w-full h-[200px] overflow-hidden font-serif">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('img-overlay.png')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-green-900/80 to-green-900/40"></div>
        <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4">
          <div className="max-w-lg tracking-wide">
            <h1 className="text-white text-3xl md:text-4xl font-bold">CSU Online Services</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <div className="overflow-x-auto">
          {services && services.length > 0 ? (
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-3 text-left bg-green-800 text-white border border-green-900">Type of Service</th>
                  <th className="p-3 text-left bg-green-800 text-white border border-green-900">Name</th>
                  <th className="p-3 text-left bg-green-800 text-white border border-green-900">Date</th>
                  <th className="p-3 text-left bg-green-800 text-white border border-green-900">Action</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border">{service.service_type}</td>
                    <td className="p-3 border">{service.name}</td>
                    <td className="p-3 border">{service.date}</td>
                    <td className="p-3 border text-center">
                      <div className="flex justify-center gap-2">
                        <button
                          className="bg-green-500 text-white px-4 py-2 rounded w-24 text-sm font-semibold hover:bg-green-600"
                          onClick={() => openModal(service, "Approved")}
                        >
                          Accept
                        </button>
                        <button
                          className="bg-red-500 text-white px-4 py-2 rounded w-24 text-sm font-semibold hover:bg-red-600"
                          onClick={() => openModal(service, "Rejected")}
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
            <p className="text-center text-gray-600 text-lg font-semibold">No Pending Services</p>
          )}
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.3)]">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold mb-4">Confirm Status Update</h2>
            <p className="mb-2">Service: <strong>{selectedService?.service_type}</strong></p>
            <p className="mb-4">New Status: <strong>{newStatus}</strong></p>
            <textarea
              className="w-full p-2 border rounded-md mb-4"
              rows="3"
              placeholder="Enter a note (optional)"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={updateStatus}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminServices;
