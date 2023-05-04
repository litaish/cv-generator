import React, { Component } from "react";
import CVStyles from "../styles/CV.module.css";

class CVTitle extends Component {
    constructor() {
        super();
    }

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