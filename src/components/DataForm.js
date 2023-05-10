import React from "react";
import FormStyles from "../styles/Form.module.css";
import GeneralInfo from "./GeneralInfo";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";

class DataForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      general: {
        name: "",
        phone: "",
        email: "",
        github: "",
        about: ""
      },
      education: {
        institution: "",
        program: "",
        startDate: "",
        endDate: "",
      },
      experience: {
        company: "",
        desc: "",
        startDate: "",
        endDate: "",
      },
      skills: [],
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddSkill = this.handleAddSkill.bind(this);
  }

  // Spread operator to get all previous properties, so a new object does not get created every time a change happens
  handleInputChange(e, sectionName) {
    this.setState(prevState => ({
      [sectionName]: {
        ...prevState[sectionName],
        [e.target.name]: e.target.value.split("\n") // Split each skill by new line
      }
    }))
  }

  handleAddSkill(e) {
    this.setState({
      skills: [e.target.value]
    })
  }

  render() {
    const { submitForm } = this.props;

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm(this.state);
        }}
        className={FormStyles.form}>
        <GeneralInfo
          handleInputChange={(e) => this.handleInputChange(e, "general")}
        />
        <Skills
          handleAddSkill={this.handleAddSkill}
        />
        <Education
          handleInputChange={(e) => this.handleInputChange(e, "education")}
        />
        <Experience
          handleInputChange={(e) => this.handleInputChange(e, "experience")}
        />
        <div className={FormStyles.row_submit}>
          <button className={FormStyles.submit}>Submit</button>
        </div>
      </form>
    );
  }
}

export default DataForm;
