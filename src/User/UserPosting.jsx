import React, { useState } from 'react';
import supabase from '../SupabaseClient';
import Navbar from './Navbar';
import Header from './Header';



const UserPosting = () => {
  const [formData, setFormData] = useState({
    companyLogo: null,
    companyEmail: '',
    contactPerson: '',
    jobDescription: '',
    companyName: '',
    contactNumber: '',
    companyLocation: '',
    agreeToTerms: false
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleFileUpload = (e) => {
    setFormData({
      ...formData,
      companyLogo: e.target.files[0]
    });
  };

  const uploadCompanyLogo = async (file) => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `images/${fileName}`;

    const { data, error } = await supabase.storage
      .from('images')
      .upload(filePath, file);

    if (error) {
      console.error('Error uploading logo:', error.message);
      return null;
    }

    // Get public URL of uploaded file
    const { data: publicUrlData } = supabase.storage
      .from('images')
      .getPublicUrl(filePath);

    return publicUrlData.publicUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Upload logo if present
      let logoUrl = null;
      if (formData.companyLogo) {
        logoUrl = await uploadCompanyLogo(formData.companyLogo);
      }
      
      // Insert job data
      const { data, error } = await supabase
        .from('jobs')
        .insert([
          {
            company_name: formData.companyName,
            logo: logoUrl,
            company_email: formData.companyEmail,
            description: formData.jobDescription,
            contact_person: formData.contactPerson,
            contact_number: formData.contactNumber,
            company_location: formData.companyLocation,
          },
        ]);
    
      if (error) {
        console.error('Error inserting job:', error);
        alert('Error submitting job. Please try again.');
      } else {
        console.log('Job inserted successfully:', data);
        alert('Job posted successfully!');
        
        // Reset form
        setFormData({
          companyLogo: null,
          companyEmail: '',
          contactPerson: '',
          jobDescription: '',
          companyName: '',
          contactNumber: '',
          companyLocation: '',
          agreeToTerms: false
        });
      }
    } catch (error) {
      console.error('Error in submission process:', error);
      alert('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Header />
      <div className="w-full bg-white">
        {/* Header */}
        <div className="w-full bg-green-800 p-4">
          <h1 className="text-white text-2xl font-bold mx-10">
            JOB POSTING <span className="text-yellow-400">Request Form</span>
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="bg-gray-200 p-6 rounded">
              <div className="mb-4 relative">
                <div className="flex items-center border border-green-800 bg-white rounded">
                  <input
                    type="text"
                    className="p-3 flex-grow"
                    placeholder="Company Logo"
                    disabled
                    value={formData.companyLogo ? formData.companyLogo.name : ''}
                  />
                  <label className="bg-green-800 text-white p-3 cursor-pointer flex items-center">
                    Upload File
                    <input
                      type="file"
                      className="hidden"
                      name="companyLogo"
                      onChange={handleFileUpload}
                      accept="image/*"
                    />
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  className="w-full p-3 border border-green-800 bg-white rounded"
                  placeholder="Company Email Address"
                  name="companyEmail"
                  value={formData.companyEmail}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  className="w-full p-3 border border-green-800 bg-white rounded"
                  placeholder="Contact Person"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-4">
                <textarea
                  className="w-full p-3 border border-green-800 bg-white rounded h-48"
                  placeholder="Job Description"
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-gray-200 p-6 rounded">
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full p-3 border border-green-800 bg-white rounded"
                  placeholder="Company Name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  className="w-full p-3 border border-green-800 bg-white rounded"
                  placeholder="Contact Number"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  className="w-full p-3 border border-green-800 bg-white rounded"
                  placeholder="Company Location"
                  name="companyLocation"
                  value={formData.companyLocation}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-5 h-5 border border-green-800"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="ml-2">
                    I agree to the <a href="#" className="text-green-800 font-medium">Terms and Conditions</a>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="mt-3 w-full bg-yellow-500 text-black font-bold py-3 rounded hover:bg-yellow-600 transition duration-200"
                disabled={loading || !formData.agreeToTerms}
              >
                {loading ? 'Submitting...' : 'SUBMIT REQUEST'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserPosting;