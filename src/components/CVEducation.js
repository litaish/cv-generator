import React from "react";
import CVStyles from "../styles/CV.module.css";

class CVEducation extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    
    return (
      <div className={CVStyles.item}>
        <div className={CVStyles.item__title}>Education</div>
        <div className={CVStyles.item__content}>
          <div className={CVStyles.item__dated}>
            <p className={CVStyles.item__dated__date}>
              <span>2000</span> - <span>2004</span>
            </p>
            <p className={CVStyles.item__dated__establishment}>Harvard</p>
            <p className={CVStyles.item__dated__description}>
              Bachelors degree in Computer Science
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CVEducation;
