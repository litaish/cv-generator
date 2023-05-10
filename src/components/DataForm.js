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
        name: "Alexandra Johnson",
        phone: "(415)123-4567",
        email: "alex@gmail.com",
        github: "github.com/mygithub",
        about: "Creative software engineer with a passion for artificial intelligence and sustainability"
      },
      education: {
        institution: "Massachusetts Institute of Technology",
        program: "Bachelor's degree in Computer Science",
        startDate: "08/01/2016",
        endDate: "06/01/2020",
      },
      experience: {
        company: "Tesla",
        desc: "Implemented machine learning algorithms for autonomous driving systems",
        startDate: "07/01/2020",
        endDate: "07/01/2022",
      },
      skills: ["Python", "ML", "Algorithms and Data Structures"],
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddSkill = this.handleAddSkill.bind(this);
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
