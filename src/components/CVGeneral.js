import React from "react";
import CVStyles from "../styles/CV.module.css";
import CVTitle from "./CVTitle";

const CVGeneral = ({ general }) => {
  return (
    <div className={CVStyles.item}>
      <CVTitle title="General Information" />
      <div className={CVStyles.item__content}>
        <p className={CVStyles.general__content}>
          {general?.about}
        </p>
      </div>
    </div>
  );
}

export default CVGeneral;
