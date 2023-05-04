import React from "react";
import CVStyles from "../styles/CV.module.css";

class CVGeneral extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { desc } = this.props;

    return (
      <div className={CVStyles.item}>
        <div className={CVStyles.item__title}>General Information</div>
        <div className={CVStyles.item__content}>
          <p className={CVStyles.general__content}>
            {desc}
          </p>
        </div>
      </div>
    );
  }
}

export default CVGeneral;
