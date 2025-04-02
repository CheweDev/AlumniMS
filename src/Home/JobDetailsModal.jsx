import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import supabase from "../SupabaseClient";

const JobDetailsModal = ({ isOpen, onClose, jobId }) => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen && jobId) {
      fetchJobDetails();
    }
  }, [isOpen, jobId]);

  const fetchJobDetails = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .eq("id", jobId)
        .single();
      
      if (error) throw error;
      setJob(data);
    } catch (error) {
      console.error("Error fetching job details:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
  
    return `${month}-${day}-${year}`;
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.3)]">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold text-green-900">Job Details</h2>
        </div>

        <div className="p-6">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-900"></div>
            </div>
          ) : job ? (
            <div>
              <div className="flex items-center mb-6">
                <img
                  src={job.logo || "/placeholder.svg"}
                  alt={`${job.company_name} logo`}
                  className="w-16 h-16 object-contain mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold text-green-900">{job.company_name}</h3>
                  <p className="text-gray-600">Posted: {formatDate(job.created_at)}</p>
                </div>
              </div>
              {job.company_location && (
                  <div>
                    <h4 className="font-semibold text-green-800">Location: {job.company_location}</h4>
                    <p className="text-gray-700">{job.location}</p>
                  </div>
                )}
                
              <div className="space-y-4 mt-3">
                <div>
                  <h4 className="font-semibold text-green-800">Job Description</h4>
                  <p className="text-gray-700">{job.description}</p>
                </div>
                
                {job.company_email && (
                  <div>
                    <h4 className="font-semibold text-green-800">Submit CV and Application Here:</h4>
                    <p className="text-gray-700">{job.company_email}</p>
                  </div>
                )}
            
                {job.contact_person && (
                  <div>
                    <h4 className="font-semibold text-green-800">For Inquiries, Contact: {job.contact_person} - {job.contact_number}</h4>
                  </div>
                )}
              </div>
              
              <div className="mt-8 flex justify-end">
                <button
                  className="bg-green-900 text-white px-6 py-2 rounded-full text-sm hover:bg-green-800 font-medium"
                  onClick={(e) => {
                    if (e.target === e.currentTarget) {
                      onClose();
                    }
                  }}
                >
                 Close
                </button>
              </div>
            </div>
          ) : (
            <p className="text-center text-red-500">Job information not found.</p>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default JobDetailsModal;