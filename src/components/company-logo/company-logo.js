import React from "react";
import classes from "./company-logo.module.css";

const CompanyLogo = ({ title, image }) => {
    return (
        <div className={classes.CompanyLogo}>
            <img src={image} alt={title} />
            <span>{title}</span>
        </div>
    );
};

export default CompanyLogo;
