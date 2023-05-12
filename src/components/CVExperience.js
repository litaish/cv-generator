import React from "react";
import CVStyles from "../styles/CV.module.css";
import CVTitle from "./CVTitle";
import uniqid from 'uniqid';

const CVExperience = ({ experienceSections }) => {
  return (
    <div className={CVStyles.item}>
      <CVTitle title="Experience" />

      {experienceSections?.map(experience => {
        return (
          <div
            key={uniqid()}
            className={CVStyles.item__content}>
            <div className={CVStyles.item__dated}>
              <p className={CVStyles.item__dated__date}>
                <span>{experience.startDate}</span> - <span>{experience.endDate}</span>
              </p>
              <p className={CVStyles.item__dated__establishment}>{experience.company}</p>
              <p className={CVStyles.item__dated__description}>
                {experience.desc}
              </p>
            </div>
          </div>
        )
      })}

    </div>
  );
}

export default CVExperience;
