import React from "react";
import CVStyles from "../styles/CV.module.css";
import CVTitle from "./CVTitle";

class CVGeneral extends React.Component {
  render() {
    const { general } = this.props;

    return (
      <div className={CVStyles.item}>
        <CVTitle title="General Information"/>
        <div className={CVStyles.item__content}>
          <p className={CVStyles.general__content}>
            {general && general.desc}
          </p>
        </div>
      </div>
    );
  }
}

export default CVGeneral;
