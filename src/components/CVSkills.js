import React from "react";
import CVStyles from "../styles/CV.module.css";
import CVTitle from "./CVTitle";

class CVSkills extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { skills } = this.props;

    return (
      <div className={CVStyles.item}>
        <CVTitle title="SKills" />
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
