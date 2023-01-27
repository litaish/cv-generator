import React from "react";
import CVStyles from "../styles/CV.module.css";

class CVGeneral extends React.Component {
  render() {
    return (
      <div className={CVStyles.item}>
        <div className={CVStyles.item__title}>General Information</div>
        <div className={CVStyles.item__content}>
          <p className={CVStyles.general__content}>
            This is something really interesting about myself.
          </p>
        </div>
      </div>
    );
  }
}

export default CVGeneral;
