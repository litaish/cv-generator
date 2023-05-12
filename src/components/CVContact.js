import React from "react";
import CVStyles from "../styles/CV.module.css";

const CVContact = ({ general }) => {
    return (
        <div className={CVStyles.header}>
            <h1 className={CVStyles.name}>{general?.name}</h1>
            <div className={CVStyles.contact}>
                <p>
                    <span>Phone Number:</span>{general?.phone}
                </p>
                <p>
                    <span>GitHub:</span>{general?.github}
                </p>
                <p>
                    <span>E-mail address:</span>{general?.email}
                </p>
            </div>
        </div>
    );
};

export default CVContact;