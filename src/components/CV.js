import React from "react";
import CVStyles from "./CV.module.css";
import CVGeneral from "./CVGeneral";
import CVSkills from "./CVSkills";
import CVExperience from "./CVExperience";
import CVEducation from "./CVEducation";

class CV extends React.Component {
  render() {
    return (
      <div className={CVStyles.wrapper}>
        <h5>Your Generated CV Example</h5>
        <div className={CVStyles.cv}>
          <div className={CVStyles.header}>
            <h1 className={CVStyles.name}>Jonathan Sanders</h1>
            <div className={CVStyles.contact}>
              <p>
                <span>Phone Number:</span>+371348838382
              </p>
              <p>
                <span>GitHub:</span>github.com/mygithub
              </p>
              <p>
                <span>E-mail address:</span>example@gmail.com
              </p>
            </div>
          </div>
          <div className={CVStyles.content}>
            <CVGeneral />
            <CVSkills />
            <CVExperience />
            <CVEducation />
          </div>
        </div>
      </div>
    );
  }
}

export default CV;
