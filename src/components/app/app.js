import React, { Component } from "react";
import CompaniesList from "../companies-list";
import Question from "../question";
import CompanyLogo from "../company-logo";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { getRandomNumber } from "../../utils";
import Spinner from "../ui/spinner";
import "./animations.css";
import classes from "./app.module.css";
import { withRouter } from "react-router-dom";
import qs from "qs";

class App extends Component {
    state = {
        companies: [],
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

    onExitFromQuestion = () => {
        this.props.history.push("/samples");
    };

    render() {
        const { companies, loading } = this.state;
        const { sampleId } = qs.parse(this.props.location.search, {
            ignoreQueryPrefix: true,
        });

        let layout = <Spinner />;
        if (!loading) {
            layout = <CompaniesList companies={companies} />;
        }
        if (sampleId && !loading) {
            const questionNumber = getRandomNumber(
                companies[sampleId].questions.length
            );
            layout = (
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
                <SwitchTransition mode="out-in">
                    <CSSTransition
                        key={
                            (sampleId && loading) ||
                            (sampleId && !loading) ||
                            loading
                        }
                        classNames="layout"
                        timeout={400}
                    >
                        {layout}
                    </CSSTransition>
                </SwitchTransition>
            </div>
        );
    }
}

export default withRouter(App);
