import React from "react";
import classes from "./company.module.css";
import { Link } from "react-router-dom";

const Company = ({ company }) => {
    return (
        <Link
            className={classes.Company}
            to={`/samples?sampleId=${company.id}`}
        >
            <img
                className={classes.Image}
                src={company.image}
                alt={company.title}
            />
            <span className={classes.Title}>{company.title}</span>
        </Link>
    );
};

export default Company;
