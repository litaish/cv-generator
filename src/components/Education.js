import React from "react";
import FormStyles from "../styles/Form.module.css";

class Education extends React.Component {
  render() {
    const { handleInputChange } = this.props;

    return (
      <div className={FormStyles.section}>
        <div className={FormStyles.title}>
          <p>Education</p>
          <p>Provide information about your education</p>
        </div>
        <div className={FormStyles.group}>
          <div className={FormStyles.row}>
            <label htmlFor="ed_institution">Educational Institution</label>
            <input
              name="institution"
              onChange={handleInputChange}
              id="ed_institution"
              type="text"
              placeholder="Harvard"
            ></input>
          </div>
          <div className={FormStyles.row}>
            <label htmlFor="ed_level">
              Education Level (e.g Bachelors degree) and Program
            </label>
            <input
              name="program"
              onChange={handleInputChange}
              id="ed_level"
              type="text"
              placeholder="Master's degree in Computer Science"
            ></input>
          </div>
          <div className={FormStyles.row}>
            <label htmlFor="ed_from_date">Start Date</label>
            <input
              name="startDate"
              onChange={handleInputChange}
              id="ed_from_date"
              type="date"></input>
          </div>
          <div className={FormStyles.row}>
            <label htmlFor="ed_from_date">End Date</label>
            <input
              name="endDate"
              onChange={handleInputChange}
              id="ed_end_date"
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

export default Education;
