import { useNavigate } from "react-router-dom";
import React, { useRef, useState, useEffect, use } from "react";
import supabase from "../SupabaseClient";

const Directory = () => {
  const navigate = useNavigate();
  const homeRef = useRef(null);
  const announcementsRef = useRef(null);
  const careersRef = useRef(null);
  const servicesRef = useRef(null);
  const associationRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const [users, setUsers] = useState([]);
  
  // State for search term
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    fetchUsers();
  }, []);
  
  const fetchUsers = async () => {
    const { data } = await supabase.from("alumni").select("*");
    setUsers(data);
  };
  
  // Filter users based on search term
  const filteredUsers = users.filter(user => 
    user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.year_graduated.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="mb-6 flex">
          <input
            type="text"
            placeholder="Search name or graduation year..."
            className="w-full p-3 bg-gray-100 border border-gray-300 rounded-l-md focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-yellow-500 p-3 rounded-r-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-3 text-left bg-green-800 text-white border border-green-900">Name</th>
                <th className="p-3 text-left bg-green-800 text-white border border-green-900">Graduation Year</th>
                <th className="p-3 text-left bg-green-800 text-white border border-green-900">College</th>
                <th className="p-3 text-left bg-green-800 text-white border border-green-900">Contact Info</th>
                <th className="p-3 text-left bg-green-800 text-white border border-green-900">Address</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="p-3 border">{user.first_name} {user.last_name}</td>
                  <td className="p-3 border">{user.year_graduated}</td>
                  <td className="p-3 border">{user.college}</td>
                  <td className="p-3 border">{user.contact_number}</td>
                  <td className="p-3 border">{user.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Directory;