import React from "react";
import FormStyles from "./Form.module.css";

class Education extends React.Component {
  render() {
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
              id="ed_institution"
              type="text"
              placeholder="Harvard"
            ></input>
          </div>
          <div className={FormStyles.row}>
            <label htmlFor="ed_program">Program</label>
            <input
              id="ed_program"
              type="text"
              placeholder="Computer Science"
            ></input>
          </div>
          <div className={FormStyles.row}>
            <label htmlFor="ed_level">
              Education Level (e.g Bachelors degree)
            </label>
            <input
              id="ed_level"
              type="text"
              placeholder="Master's degree"
            ></input>
          </div>
          <div className={FormStyles.row}>
            <label htmlFor="ed_from_date">Start Date</label>
            <input id="ed_from_date" type="date"></input>
          </div>
          <div className={FormStyles.row}>
            <label htmlFor="ed_from_date">End Date</label>
            <input id="ed_end_date" type="date"></input>
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
