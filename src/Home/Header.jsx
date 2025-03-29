import React from "react";
import { IoHome } from "react-icons/io5";
import { IoNewspaper } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiErrorWarningFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";

const Header = ({ scrollToSection, refs }) => {
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-gray-100 text-green-900 shadow-md flex justify-center">
        <div className="flex justify-center w-full">
          <ul className="menu menu-horizontal font-bold space-x-6">
            <li>
              <button
                onClick={() => scrollToSection(refs.homeRef)}
                className="px-4"
              >
                <IoHome />
                HOME
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(refs.announcementsRef)}
                className="px-4"
              >
                <IoNewspaper />
                ANNOUNCEMENT & EVENTS
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(refs.careersRef)}
                className="px-4"
              >
                <MdWork />
                CAREERS
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(refs.servicesRef)}
                className="px-4"
              >
                <RiCustomerService2Fill />
                ONLINE SERVICES
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(refs.associationRef)}
                className="px-4"
              >
                <FaPeopleGroup />
                ASSOCIATION
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(refs.aboutRef)}
                className="px-4"
              >
                <RiErrorWarningFill />
                ABOUT
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(refs.contactRef)}
                className="px-4"
              >
                <IoCall />
                CONTACT US
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

{
  /* <li className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center px-4 cursor-pointer"
              >
                ANNOUNCEMENT & EVENTS
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link to="/announcements">Gallery</Link>
                </li>
                <li>
                  <Link to="/announcement/events">Upcoming Events</Link>
                </li>
                <li>
                  <Link to="/announcement/appointment">
                    Book an Appointment
                  </Link>
                </li>
              </ul>
            </li> */
}
