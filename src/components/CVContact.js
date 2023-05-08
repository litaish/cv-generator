import React from "react";
import CVStyles from "../styles/CV.module.css";

class CVContact extends React.Component {
    render() {
        const { general } = this.props;

        return (
            <div className={CVStyles.header}>
                <h1 className={CVStyles.name}>{general && general.name}</h1>
                <div className={CVStyles.contact}>
                    <p>
                        <span>Phone Number:</span>{general && general.phone}
                    </p>
                    <p>
                        <span>GitHub:</span>{general && general.github}
                    </p>
                    <p>
                        <span>E-mail address:</span>{general && general.email}
                    </p>
                </div>
            </div>
        );
    }
}

export default CVContact;