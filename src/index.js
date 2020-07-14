import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

const target = document.getElementById("caseStudiesApp");

if (target) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    target
  );
}
