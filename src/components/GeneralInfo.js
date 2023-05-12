import React from "react";
import FormStyles from "../styles/Form.module.css";

const GeneralInfo = ({ handleInputChange }) => {
  return (
    <div className={FormStyles.section}>
      <div className={FormStyles.title}>
        <p>General Info</p>
        <p>Provide information about yourself</p>
      </div>
      <div className={FormStyles.group}>
        <div className={FormStyles.row}>
          <label htmlFor="full_name">Full Name</label>
          <input
            name="name"
            onChange={handleInputChange}
            id="full_name"
            type="text"
            placeholder="Octavia Levesque"
          ></input>
        </div>
        <div className={FormStyles.row}>
          <label htmlFor="phone">Phone Number</label>
          <input
            name="phone"
            onChange={handleInputChange}
            id="phone"
            type="text"
            placeholder="(720)987-6543"
          ></input>
        </div>
        <div className={FormStyles.row}>
          <label htmlFor="email">E-mail</label>
          <input
            name="email"
            onChange={handleInputChange}
            id="email"
            type="email"
            placeholder="octavia.rocketeer@outlook.com"
          ></input>
        </div>
        <div className={FormStyles.row}>
          <label htmlFor="github">GitHub</label>
          <input
            name="github"
            onChange={handleInputChange}
            id="github"
            type="text"
            placeholder="github.com/octavia"
          ></input>
        </div>
        <div className={FormStyles.row}>
          <label htmlFor="about_me">About me</label>
          <textarea
            name="about"
            onChange={handleInputChange}
            id="about_me"
            placeholder="Innovative software developer with a fascination for space exploration and virtual reality"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;
