import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const target = document.getElementById("caseStudiesApp");

if (target) {
    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <Switch>
                    <Route path="/samples" component={App} exact />
                    <Route path="/samples/:sampleId?" component={App} exact />
                    <Route render={() => <h2>Sample not found</h2>} />
                </Switch>
            </Router>
        </React.StrictMode>,
        target
    );
}
