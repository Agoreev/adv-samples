import React from "react";
import classes from "./company.module.css";

const Company = ({ company, onCompanySelected }) => {
    return (
        <div
            className={classes.Company}
            onClick={() => onCompanySelected(company.id)}
        >
            <img
                className={classes.Image}
                src={company.image}
                alt={company.title}
            />
            <span className={classes.Title}>{company.title}</span>
        </div>
    );
};

export default Company;
