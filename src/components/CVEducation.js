import React from "react";
import CVStyles from "../styles/CV.module.css";
import CVTitle from "./CVTitle";
import uniqid from 'uniqid';

class CVEducation extends React.Component {
  render() {
    const { educationSections } = this.props;

    return (
      <div className={CVStyles.item}>
        <CVTitle title="Education" />

        {educationSections?.map(education => {
          return (
            <div
              key={uniqid()}
              className={CVStyles.item__content}>
              <div className={CVStyles.item__dated}>
                <p className={CVStyles.item__dated__date}>
                  <span>{education?.startDate}</span> - <span>{education?.endDate}</span>
                </p>
                <p className={CVStyles.item__dated__establishment}>{education?.institution}</p>
                <p className={CVStyles.item__dated__description}>
                  {education?.program}
                </p>
              </div>
            </div>
          )
        })}

      </div>
    );
  }
}

export default CVEducation;
