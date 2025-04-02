import Navbar from "./Navbar";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import ContactUs from "../Home/Contact";


const UserContact = () => {
  const navigate = useNavigate();
  const homeRef = useRef(null);
  const announcementsRef = useRef(null);
  const careersRef = useRef(null);
  const servicesRef = useRef(null);
  const associationRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Navbar />
      <Header
        scrollToSection={scrollToSection}
        refs={{
          homeRef,
          announcementsRef,
          careersRef,
          servicesRef,
          associationRef,
          aboutRef,
          contactRef,
        }}
      />
      <div className="mt-5">
      <ContactUs/>
      </div>
      

     
    </>
  );
};

export default UserContact;
