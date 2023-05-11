import React from "react";
import FormStyles from "../styles/Form.module.css";

class Experience extends React.Component {
  render() {
    const { handleInputChange, renderSectionOptions } = this.props;
    
    const sectionOptions = renderSectionOptions();

    return (
      <div className={FormStyles.section}>
        <div className={FormStyles.title}>
          <p>Experience</p>
          <p>Provide information about your work experience</p>
        </div>
        <div className={FormStyles.group}>
          <div className={FormStyles.row}>
            <label htmlFor="company_name">Company</label>
            <input
              name="company"
              onChange={handleInputChange}
              id="company_name"
              type="text"
              placeholder="SpaceX"
            ></input>
          </div>
          <div className={FormStyles.row}>
            <label htmlFor="job_description">Short Job Description</label>
            <input
              name="desc"
              onChange={handleInputChange}
              id="job_description"
              type="text"
              placeholder="Developed immersive training simulations for astronauts"
            ></input>
          </div>
          <div className={FormStyles.row}>
            <label htmlFor="job_start">Start Date</label>
            <input
              name="startDate"
              onChange={handleInputChange}
              id="job_start"
              type="date"></input>
          </div>
          <div className={FormStyles.row}>
            <label htmlFor="job_end">End Date</label>
            <input
              name="endDate"
              onChange={handleInputChange}
              id="job_end"
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
}

export default Experience;
