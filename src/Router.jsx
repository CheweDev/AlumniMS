import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.jsx";
import Register from "./Auth/Register.jsx";
import News from "./Home/News.jsx";
import Login from "./Auth/Login.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
