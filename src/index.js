import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { BrowserRouter as Router, Route } from "react-router-dom";

const target = document.getElementById("caseStudiesApp");

if (target) {
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <Route path="/" component={App} />
            </Router>
        </React.StrictMode>,
        target
    );
}
