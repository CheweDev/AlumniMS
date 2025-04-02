import React,  { useState, useEffect } from "react";
import supabase from "../SupabaseClient";

const Announcements = () => {
const [announcements, setAnnouncements] = useState([]);

useEffect(() => {
  fetchAnnouncements();
}, []);

const fetchAnnouncements = async () => {
  const { data } = await supabase.from("announcements").select("*");
  setAnnouncements(data);
};
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mb-5">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="card bg-base-100 w-full shadow-lg"
          >
            <figure>
              <img
                src={announcement.image || "/placeholder.svg"}
                alt={announcement.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-green-900 tracking-wide font-serif">
                {announcement.title}
              </h2>
              <p className="text-gray-500 text-sm">{announcement.date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Announcements;
