import React, { Component } from "react";
import CompaniesList from "../companies-list";
import Question from "../question";
import CompanyLogo from "../company-logo";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { getRandomNumber } from "../../utils";
import Spinner from "../ui/spinner";
import "./animations.css";
import classes from "./app.module.css";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    withRouter,
} from "react-router-dom";

class App extends Component {
    state = {
        companies: [],
        companiesFromJson: {},
        selectedCompanyId: null,
        loading: true,
    };

    componentDidMount() {
        return fetch(`/wp-json/wp/v2/companies`)
            .then((response) => response.json())
            .then((responseJson) => {
                const companies = {};
                responseJson.forEach((company) => {
                    const comp = JSON.parse(company.adv_json);
                    companies[comp.id] = comp;
                });
                this.setState({
                    companies: companies,
                    loading: false,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    onCompanySelected = (companyId) => {
        this.setState({
            selectedCompanyId: companyId,
        });
    };

    onExitFromQuestion = () => {
        // this.setState({
        //     selectedCompanyId: null,
        // });
        this.props.history.push("/samples");
    };

    render() {
        const { companies, selectedCompanyId, loading } = this.state;
        const { location } = this.props;
        const { sampleId } = location.state;

        let companiesLayout = <Spinner />;
        if (!loading) {
            companiesLayout = (
                <CompaniesList
                    companies={companies}
                    onCompanySelected={this.onCompanySelected}
                />
            );
        }
        let questionLayout = null;
        if (sampleId) {
            const questionNumber = getRandomNumber(
                companies[sampleId].questions.length
            );
            questionLayout = (
                <div>
                    <CompanyLogo
                        image={companies[sampleId].image}
                        title={companies[sampleId].title}
                    />
                    <Question
                        question={companies[sampleId].questions[questionNumber]}
                        onExitFromQuestion={this.onExitFromQuestion}
                    />
                </div>
            );
        }
        return (
            <div className={classes.Container}>
                <Router>
                    <SwitchTransition mode="out-in">
                        <CSSTransition
                            key={location.key || loading}
                            classNames="layout"
                            timeout={400}
                        >
                            <Switch>
                                <Route
                                    path="/samples"
                                    render={() => {
                                        return companiesLayout;
                                    }}
                                    exact
                                />
                                <Route
                                    path="/samples/:sampleId?"
                                    render={() => {
                                        return questionLayout;
                                    }}
                                    exact
                                />
                                <Route render={() => <h2>Page not found</h2>} />
                            </Switch>
                        </CSSTransition>
                    </SwitchTransition>
                </Router>
                {/* <SwitchTransition mode="out-in">
                    <CSSTransition
                        key={selectedCompanyId || loading}
                        classNames="layout"
                        timeout={400}
                    >
                        {layout}
                    </CSSTransition>
                </SwitchTransition> */}
            </div>
        );
    }
}

export default withRouter(App);
