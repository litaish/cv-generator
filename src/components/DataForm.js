import React from "react";
import FormStyles from "../styles/Form.module.css";
import GeneralInfo from "./GeneralInfo";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import JSONExample from "../json/example.json";
import JSONCleared from "../json/cleared.json";

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
    this.handleLoadExampleData = this.handleLoadExampleData.bind(this);
  }

  // Spread operator to get all previous properties, so a new object does not get created every time a change happens
  handleInputChange(e, sectionName) {
    this.setState(prevState => ({
      [sectionName]: {
        ...prevState[sectionName],
        [e.target.name]: e.target.value // Split each skill by new line
      }
    }))
  }

  handleAddSkill(e) {
    this.setState({
      skills: e.target.value.split("\n") // Not wrapped in brackets because split method returns an array
    })
  }

  handleLoadExampleData(json) {
    const { general, education, experience, skills } = json;

    this.setState({
      general, // Can use, because state has same names
      education,
      experience,
      skills
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
        <div
          onClick={() => this.handleLoadExampleData(JSONExample)}
          className={FormStyles.row_btn}>
          <button className={`${FormStyles.btn__form__action} ${FormStyles.btn__load}`}>Load an Example</button>
        </div>
        <div
          onClick={() => this.handleLoadExampleData(JSONCleared)}
          className={FormStyles.row_btn}>
          <button className={`${FormStyles.btn__form__action} ${FormStyles.btn__clear}`}>Clear CV</button>
        </div>
        <div className={FormStyles.row_btn}>
          <button className={`${FormStyles.btn__form__action} ${FormStyles.btn__submit}`}>Submit Your Data</button>
        </div>
      </form>
    );
  }
}

export default DataForm;
