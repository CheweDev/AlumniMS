import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Register from "./Auth/Register.jsx";
import News from "./Home/News.jsx";
import Login from "./Auth/Login.jsx";

// User 
import UserHome from "./User/UserHome.jsx";
import UserCareer from "./User/UserCareer.jsx";
import UserServices from "./User/UserServices.jsx";
import UserAssociation from "./User/UserAssociation.jsx";
import UserAbout from "./User/UserAbout.jsx";
import UserContact from "./User/UserContact.jsx";
import UserDirectory from "./User/UserDirectory.jsx";
import UserProject from "./User/UserProject.jsx";
import UserPosting from "./User/UserPosting.jsx";

// Admin
import AdminHome from "./Admin/AdminHome.jsx";
import AdminCareers from "./Admin/AdminCareers.jsx";
import AdminServices from "./Admin/AdminServices.jsx";
import AdminAssociation from "./Admin/AdminAssocation.jsx";
import AdminDirectory from "./Admin/AdminDirectory.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={<News />} />

        <Route path="/user-home" element={<UserHome />} />
        <Route path="/user-career" element={<UserCareer />} />
        <Route path="/user-services" element={<UserServices />} />
        <Route path="/user-association" element={<UserAssociation />} />
        <Route path="/user-about" element={<UserAbout />} />
        <Route path="/user-contact" element={<UserContact />} />
        <Route path="/user-directory" element={<UserDirectory />} />
        <Route path="/user-project" element={<UserProject />} />
        <Route path="/user-posting" element={<UserPosting />} />

        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/admin-career" element={<AdminCareers />} />
        <Route path="/admin-services" element={<AdminServices />} />
        <Route path="/admin-association" element={<AdminAssociation />} />
        <Route path="/admin-directory" element={<AdminDirectory />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
