import React from "react";
import { GoFileDirectoryFill } from "react-icons/go";
import { IoNewspaper } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiErrorWarningFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { AiFillProject } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Header = ({ scrollToSection, refs }) => {
const navigate = useNavigate();
  return (
    <div className="sticky top-0 z-50">
      <div className="bg-gray-100 text-green-900 shadow-md flex justify-center">
        <div className="flex justify-center w-full">
          <ul className="menu menu-horizontal font-bold space-x-6">
            <li>
              <button
             onClick={() => navigate("/admin-home")}
                className="px-4"
              >
                <IoNewspaper />
                ANNOUNCEMENT & EVENTS
              </button>
            </li>
            <li>
              <button
               onClick={() => navigate("/admin-career")}
                className="px-4"
              >
                <MdWork />
                CAREERS
              </button>
            </li>
            <li>
              <button
               onClick={() => navigate("/admin-services")}
                className="px-4"
              >
                <RiCustomerService2Fill />
                ONLINE SERVICES
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/admin-association")}
                className="px-4"
              >
                <FaPeopleGroup />
                ASSOCIATION
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/admin-directory")}
                className="px-4"
              >
                <GoFileDirectoryFill  />
                ALUMNI DIRECTORY
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/admin-project")}
                className="px-4"
              >
                <AiFillProject  />
               ALUMNI PROJECT
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;

