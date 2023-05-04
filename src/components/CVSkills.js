import React from "react";
import CVStyles from "../styles/CV.module.css";

class CVSkills extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { skills } = this.props;

    return (
      <div className={CVStyles.item}>
        <div className={CVStyles.item__title}>Skills</div>
        <div className={CVStyles.item__content}>
          <ul className={CVStyles.skills__content}>
            { /* Check if skills array is defined */}
            {skills && skills.map(skill => {
              return <li>{skill}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default CVSkills;
