import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Main.css";
import Router from "./Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
