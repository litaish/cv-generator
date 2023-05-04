import React from "react";
import FormStyles from "../styles/Form.module.css";
import GeneralInfo from "./GeneralInfo";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form className={FormStyles.form}>
        <GeneralInfo />
        <Skills />
        <Education />
        <Experience />
        <div className={FormStyles.row_submit}>
          <button className={FormStyles.submit}>Submit</button>
        </div>
      </form>
    );
  }
}

export default Form;
