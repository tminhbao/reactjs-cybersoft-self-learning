import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserProfile from "./components/FormValidation/UserProfile/UserProfile";
import DemoJSS from "./components/JSS-StyledComponent/DemoStyledComponent/DemoJSS";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DemoJSS />
  </React.StrictMode>
);

reportWebVitals();
