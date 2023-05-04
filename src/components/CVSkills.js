import React from "react";
import CVStyles from "../styles/CV.module.css";

class CVSkills extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className={CVStyles.item}>
        <div className={CVStyles.item__title}>Skills</div>
        <div className={CVStyles.item__content}>
          <ul className={CVStyles.skills__content}>
            <li>C#</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>C++</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CVSkills;
