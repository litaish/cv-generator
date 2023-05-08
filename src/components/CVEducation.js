import React from "react";
import CVStyles from "../styles/CV.module.css";
import CVTitle from "./CVTitle";

class CVEducation extends React.Component {
  render() {
    const { education } = this.props;

    return (
      <div className={CVStyles.item}>
        <CVTitle title="Education" />
        <div className={CVStyles.item__content}>
          <div className={CVStyles.item__dated}>
            <p className={CVStyles.item__dated__date}>
              <span>{education && education.startDate}</span> - <span>{education && education.endDate}</span>
            </p>
            <p className={CVStyles.item__dated__establishment}>{education && education.institution}</p>
            <p className={CVStyles.item__dated__description}>
              {education && education.program}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CVEducation;
