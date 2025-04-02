import Navbar from "./Navbar";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import Announcements from "./Announcements";
import Careers from "./Careers";
import Services from "./Services";
import Association from "./Association";
import About from "./About";
import ContactUs from "./Contact";
import { RiCustomerService2Fill } from "react-icons/ri";

const Home = () => {
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

  const handleNews = () => {
    navigate("/news");
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

      {/* banner */}
      <section ref={homeRef} className="bg-white flex justify-center">
        <div className="relative">
          <img src="img1.png" alt="Caraga State University Logo" />
        </div>
      </section>

      {/* Announcement Section */}
      <section ref={announcementsRef}>
        <div className="bg-gray-200 flex items-center justify-between w-full p-2 mb-3">
          <div className="flex-1 text-center">
            <h2 className="text-xl font-bold text-green-900 font-serif">
              ANNOUNCEMENT & EVENTS
            </h2>
          </div>
          <button
            className="btn btn-sm btn-warning text-white"
            onClick={handleNews}
          >
            See More
          </button>
        </div>
        <Announcements />
      </section>

      <section ref={careersRef}>
        <div className="bg-gray-200 flex items-center justify-between w-full p-2">
          <div className="flex-1 text-center">
            <h2 className="text-xl font-bold text-green-900 font-serif">
              CAREERS
            </h2>
          </div>
        </div>
        <Careers hideButton={true} />
      </section>

      <section ref={servicesRef}>
        <div className="bg-gray-200 flex items-center justify-between w-full p-2 mb-3">
          <div className="flex-1 text-center">
            <h2 className="text-xl font-bold text-green-900 font-serif">
              ONLINE SERVICES
            </h2>
          </div>
        </div>
        <Services />
      </section>

      <section ref={associationRef}>
        <div className="bg-gray-200 flex items-center justify-between w-full p-2">
          <div className="flex-1 text-center">
            <h2 className="text-xl font-bold text-green-900 font-serif">
              ASSOCIATIONS
            </h2>
          </div>
        </div>
        <Association />
      </section>

      <section ref={aboutRef}>
        <div className="bg-gray-200 flex items-center justify-between w-full p-2">
          <div className="flex-1 text-center">
            <h2 className="text-xl font-bold text-green-900 font-serif">
              ABOUT
            </h2>
          </div>
        </div>
        <About />
      </section>

      <section ref={contactRef}>
        <div className="bg-gray-200 flex items-center justify-between w-full p-2 mb-5">
          <div className="flex-1 text-center">
            <h2 className="text-xl font-bold text-green-900 font-serif">
              CONTACT US
            </h2>
          </div>
        </div>
        <ContactUs />
      </section>

      <div className="divider"></div>

      {/* Chat Support Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-yellow-400 rounded-full cursor-pointer p-5 shadow-lg hover:bg-yellow-300 transition duration-300">
          <RiCustomerService2Fill size={30} />
        </button>
      </div>
    </>
  );
};

export default Home;
