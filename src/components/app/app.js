import React, { Component } from "react";
import CompaniesList from "../companies-list";
import Question from "../question";
import CompanyLogo from "../company-logo";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { getRandomNumber } from "../../utils";
import Spinner from "../ui/spinner";
import "./animations.css";
import classes from "./app.module.css";

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
        responseJson.map((company) => {
          const comp = JSON.parse(company.adv_json);
          companies[comp.id] = comp;
          return;
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
    this.setState({
      selectedCompanyId: null,
    });
  };

  render() {
    const { companies, selectedCompanyId, loading } = this.state;

    let layout = <Spinner />;
    if (!loading) {
      layout = (
        <CompaniesList
          companies={companies}
          onCompanySelected={this.onCompanySelected}
        />
      );
    }

    if (selectedCompanyId) {
      const questionNumber = getRandomNumber(
        companies[selectedCompanyId].questions.length
      );
      layout = (
        <div>
          <CompanyLogo
            image={companies[selectedCompanyId].image}
            title={companies[selectedCompanyId].title}
          />
          <Question
            question={companies[selectedCompanyId].questions[questionNumber]}
            onExitFromQuestion={this.onExitFromQuestion}
          />
        </div>
      );
    }
    return (
      <div className={classes.Container}>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={selectedCompanyId || loading}
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

export default App;
