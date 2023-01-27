import React from "react";
import CVStyles from "../styles/CV.module.css";

class CVExperience extends React.Component {
  render() {
    return (
      <div className={CVStyles.item}>
        <div className={CVStyles.item__title}>Experience</div>
        <div className={CVStyles.item__content}>
          <div className={CVStyles.item__dated}>
            <p className={CVStyles.item__dated__date}>
              <span>1990</span> - <span>2010</span>
            </p>
            <p className={CVStyles.item__dated__establishment}>Company Inc.</p>
            <p className={CVStyles.item__dated__description}>
              Created a cool AI model that automates my job for me
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CVExperience;
