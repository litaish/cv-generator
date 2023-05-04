import React from "react";
import CVStyles from "../styles/CV.module.css";
import CVTitle from "./CVTitle";

class CVExperience extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { company, desc, startDate, endDate } = this.props;

    return (
      <div className={CVStyles.item}>
        <CVTitle title="Experience"/>
        <div className={CVStyles.item__content}>
          <div className={CVStyles.item__dated}>
            <p className={CVStyles.item__dated__date}>
              <span>{startDate}</span> - <span>{endDate}</span>
            </p>
            <p className={CVStyles.item__dated__establishment}>{company}</p>
            <p className={CVStyles.item__dated__description}>
              {desc}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default CVExperience;
