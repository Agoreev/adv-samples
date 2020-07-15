import React from "react";
import Company from "./company";
import classes from "./companiesList.module.css";

const CompaniesList = ({ companies, onCompanySelected }) => {
    const list = Object.keys(companies).map((key) => {
        const company = companies[key];
        return (
            <Company
                key={company.id}
                company={company}
                onCompanySelected={onCompanySelected}
            />
        );
    });
    return (
        <div>
            <p className={classes.Header}>Select Sample</p>

            <div className={classes.CompaniesList}>{list}</div>
        </div>
    );
};

export default CompaniesList;
