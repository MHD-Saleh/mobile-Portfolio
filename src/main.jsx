import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ReactGA from "react-ga4";
import { Analytics } from "@vercel/analytics/react";

ReactGA.initialize("G-3WTR3PED9S");
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Analytics />
    <App />
  </React.StrictMode>
);
