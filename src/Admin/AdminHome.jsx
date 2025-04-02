import Navbar from "./Navbar";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import supabase from "../SupabaseClient";

const AdminHome = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAnnouncement, setNewAnnouncement] = useState({ title: "", image: "", date: "" });
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    const { data } = await supabase.from("announcements").select("*");
    setAnnouncements(data);
  };

  const handleDelete = async (id) => {
    const announcement = announcements.find(a => a.id === id);
    
    // Delete the image from storage if it exists
    if (announcement?.image) {
      const imagePath = announcement.image.split('/').pop();
      await supabase.storage.from("Image").remove([imagePath]);
    }
    
    // Delete the announcement record
    await supabase.from("announcements").delete().eq("id", id);
    fetchAnnouncements();
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadImage = async () => {
    if (!selectedFile) return null;
    
    setUploading(true);
    
    try {
      const fileName = `${Date.now()}-${selectedFile.name.replace(/\s/g, '_')}`;
      const { data, error } = await supabase.storage
        .from("images")
        .upload(fileName, selectedFile);
        
      if (error) throw error;
      
      const { data: publicUrlData } = supabase.storage
        .from("images")
        .getPublicUrl(fileName);
        
      return publicUrlData.publicUrl;
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    } finally {
      setUploading(false);
    }
  };

  const handlePost = async () => {
    let imageUrl = newAnnouncement.image;
    
    if (selectedFile) {
      imageUrl = await uploadImage();
      if (!imageUrl) {
        alert("Failed to upload image. Please try again.");
        return;
      }
    }
    
    await supabase.from("announcements").insert([{
      ...newAnnouncement,
      image: imageUrl
    }]);
    
    setNewAnnouncement({ title: "", image: "", date: "" });
    setSelectedFile(null);
    fetchAnnouncements();
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <Header />
      <div className="flex justify-start px-4 mt-5">
        <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">Add Announcement</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mb-5 mt-5">
        {announcements.map((announcement) => (
          <div key={announcement.id} className="card bg-base-100 w-full shadow-lg">
            <figure>
              <img src={announcement.image || "/placeholder.svg"} alt={announcement.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-green-900 tracking-wide font-serif">
                {announcement.title}
              </h2>
              <p className="text-gray-500 text-sm">{announcement.date}</p>
              <button onClick={() => handleDelete(announcement.id)} className="btn btn-error mt-2">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.3)]">
          <div className="bg-white p-5 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Post Announcement</h2>
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered w-full mb-2"
              value={newAnnouncement.title}
              onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
            />
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="file-input file-input-bordered w-full"
              />
              {selectedFile && (
                <p className="text-xs mt-1 text-gray-500">
                  Selected: {selectedFile.name}
                </p>
              )}
            </div>
            <input
              type="date"
              className="input input-bordered w-full mb-2"
              value={newAnnouncement.date}
              onChange={(e) => setNewAnnouncement({ ...newAnnouncement, date: e.target.value })}
            />
            <div className="flex justify-end mt-4">
              <button onClick={() => setIsModalOpen(false)} className="btn btn-secondary mr-2">Cancel</button>
              <button 
                onClick={handlePost} 
                className="btn btn-primary"
                disabled={uploading}
              >
                {uploading ? "Uploading..." : "Post"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminHome;