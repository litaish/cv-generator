import React from "react";
import CVStyles from "../styles/CV.module.css";
import CVTitle from "./CVTitle";

class CVEducation extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { institution, program, startDate, endDate } = this.props;

    return (
      <div className={CVStyles.item}>
        <CVTitle title="Education"/>
        <div className={CVStyles.item__content}>
          <div className={CVStyles.item__dated}>
            <p className={CVStyles.item__dated__date}>
              <span>{startDate}</span> - <span>{endDate}</span>
            </p>
            <p className={CVStyles.item__dated__establishment}>{institution}</p>
            <p className={CVStyles.item__dated__description}>
              {program}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CVEducation;
