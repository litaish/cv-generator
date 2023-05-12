import React from "react";
import FormStyles from "../styles/Form.module.css";

const Experience = ({ handleInputChange, renderSectionOptions, id }) => {
  const sectionOptions = renderSectionOptions();

  return (
    <div className={FormStyles.section}>
      <div className={FormStyles.title}>
        <p>Experience</p>
        <p>Provide information about your work experience</p>
      </div>
      <div className={FormStyles.group}>
        <div className={FormStyles.row}>
          <label htmlFor={`company_name_${id}`}>Company</label>
          <input
            name="company"
            onChange={handleInputChange}
            id={`company_name_${id}`}
            type="text"
            placeholder="SpaceX"
          ></input>
        </div>
        <div className={FormStyles.row}>
          <label htmlFor={`job_description_${id}`}>Short Job Description</label>
          <input
            name="desc"
            onChange={handleInputChange}
            id={`job_description_${id}`}
            type="text"
            placeholder="Developed immersive training simulations for astronauts"
          ></input>
        </div>
        <div className={FormStyles.row}>
          <label htmlFor={`job_start_${id}`}>Start Date</label>
          <input
            name="startDate"
            onChange={handleInputChange}
            id={`job_start_${id}`}
            type="date"></input>
        </div>
        <div className={FormStyles.row}>
          <label htmlFor={`job_end_${id}`}>End Date</label>
          <input
            name="endDate"
            onChange={handleInputChange}
            id={`job_end_${id}`}
            type="date"></input>
        </div>
        <div className={FormStyles.row}>
          <div className={FormStyles.options}>
            {sectionOptions}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
