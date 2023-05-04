import React from "react";
import CVStyles from "../styles/CV.module.css";
import CVGeneral from "./CVGeneral";
import CVSkills from "./CVSkills";
import CVExperience from "./CVExperience";
import CVEducation from "./CVEducation";

class CV extends React.Component {
  render() {
    const { general, skills, experience, education } = this.props;
    return (
      <div className={CVStyles.wrapper}>
        <h5>Your Generated CV Example</h5>
        <div className={CVStyles.cv}>
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
