import React from "react";
import CVStyles from "../styles/CV.module.css";
import CVTitle from "./CVTitle";
import uniqid from 'uniqid';

class CVSkills extends React.Component {
  render() {
    const { skills } = this.props;

    return (
      <div className={CVStyles.item}>
        <CVTitle title="Skills" />
        <div className={CVStyles.item__content}>
          <ul className={CVStyles.skills__content}>

            {skills && skills.map(skill => {
              return <li key={uniqid()}>{skill.title}</li>;
            })}

          </ul>
        </div>
      </div>
    );
  }
}

export default CVSkills;
