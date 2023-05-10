import React from "react";
import FormStyles from "../styles/Form.module.css";

class Experience extends React.Component {
  render() {
    const { handleInputChange } = this.props;

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
              placeholder="Tom's Burgers Inc."
            ></input>
          </div>
          <div className={FormStyles.row}>
            <label htmlFor="job_description">Short Job Description</label>
            <input
              name="desc"
              onChange={handleInputChange}
              id="job_description"
              type="text"
              placeholder="Grilled delicious burgers for everyone"
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
              <button className={FormStyles.button__red} type="button">
                Delete
              </button>
              <button className={FormStyles.button__green} type="button">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
