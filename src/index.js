import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserProfile from "./components/FormValidation/UserProfile/UserProfile";
import DemoJSS from "./components/JSS-StyledComponent/DemoStyledComponent/DemoJSS";
import DemoThemes from "./components/JSS-StyledComponent/Themes/DemoThemes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DemoThemes />
  </React.StrictMode>
);

reportWebVitals();
