import React from "react";
import CVStyles from "../styles/CV.module.css";
import CVTitle from "./CVTitle";
import uniqid from 'uniqid';

class CVSkills extends React.Component {
  render() {
    const { skills } = this.props;

    const skillsItems = skills?.map(skill => {
      return (
        <li key={uniqid()}>{skill}</li>
      )
    })

    return (
      <div className={CVStyles.item}>
        <CVTitle title="Skills" />
        <div className={CVStyles.item__content}>
          <ul className={CVStyles.skills__content}>

            {skillsItems}

          </ul>
        </div>
      </div>
    );
  }
}

export default CVSkills;
