import React from "react";
import CVStyles from "../styles/CV.module.css";
import CVGeneral from "./CVGeneral";
import CVSkills from "./CVSkills";
import CVExperience from "./CVExperience";
import CVEducation from "./CVEducation";
import CVContact from "./CVContact";

class CV extends React.Component {
  render() {
    const { general, skills, experience, education } = this.props;

    return (
      <div className={CVStyles.wrapper}>
        <h5>Your Generated CV Example</h5>
        <div className={CVStyles.cv}>
          <CVContact general={general} />
          <div className={CVStyles.content}>
            <CVGeneral general={general} />
            <CVSkills skills={skills} />
            <CVExperience experience={experience} />
            <CVEducation education={education} />
          </div>
        </div>
      </div>
    );
  }
}

export default CV;
