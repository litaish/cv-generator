import React, { Component } from "react";
import CVStyles from "../styles/CV.module.css";

class CVTitle extends Component {
    render() {
        const { title } = this.props;
        return(
            <div className={CVStyles.item__title}>
                {title}
            </div>
        );
    }
}

export default CVTitle;