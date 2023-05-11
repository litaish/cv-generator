import React from "react";
import FormStyles from "../styles/Form.module.css";
import GeneralInfo from "./GeneralInfo";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import JSONExample from "../json/example.json";
import JSONCleared from "../json/cleared.json";
import AddButton from "./AddButton";
import DeleteButton from "./DeleteButton";
import uniqid from 'uniqid';

class DataForm extends React.Component {
  constructor(props) {
    super(props)

    const initialExperience = {
      id: uniqid(),
      isInitial: true,
      company: "",
      desc: "",
      startDate: "",
      endDate: "",
    }

    const initialEducation = {
      id: uniqid(),
      isInitial: true,
      institution: "",
      program: "",
      startDate: "",
      endDate: "",
    }

    this.state = {
      general: {
        name: "",
        phone: "",
        email: "",
        github: "",
        about: ""
      },
      skills: [],
      experienceSections: [initialExperience], // Add initialExperience object to experienceSections array
      educationSections: [initialEducation],
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddSkill = this.handleAddSkill.bind(this);
    this.handleLoadExampleData = this.handleLoadExampleData.bind(this);
    this.renderSectionOptions = this.renderSectionOptions.bind(this);
    this.handleAddSection = this.handleAddSection.bind(this);
    this.handleRemoveSection = this.handleRemoveSection.bind(this);
  }

  handleInputChange(e, sectionName, hasMultipleSections, item = {}) {
    if (hasMultipleSections) {

      this.setState(prevState => {
        // Copy the section state array
        const newArray = [...prevState[sectionName]];

        // Find index of the object to update in new array
        const foundIndex = newArray.findIndex(x => x.id === item.id);

        // Update the object in new copied array
        newArray[foundIndex] = {
          ...newArray[foundIndex],
          [e.target.name]: e.target.value
        };

        // Update the state with the updated array of objects
        // Return is used because parantheses are omitted off setState
        return {
          [sectionName]: newArray
        };

      })

    } else {

      this.setState(prevState => ({
        [sectionName]: {
          ...prevState[sectionName], // Spread operator to get all previous properties, so a new object does not get created every time a change happens
          [e.target.name]: e.target.value
        }
      }))

    }
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

  // Checks if component is initial (first), so it doesn't render a delete section button for it
  renderSectionOptions(item, section, newItem) {
    if (item.isInitial) {
      return (
        <>
          <AddButton
            addSection={() => this.handleAddSection(section, newItem)}
          />
        </>
      )
    } else {
      return (
        <>
          <AddButton
            addSection={() => this.handleAddSection(section, newItem)}
          />
          <DeleteButton
            removeSection={() => this.handleRemoveSection(section, item)}
          />
        </>
      )
    }
  }

  handleAddSection(section, newItem) {
    this.setState(prevState => ({
      [section]: [...prevState[section], newItem] // Access section from prevState via array, not dot notation
    }))
  }

  handleRemoveSection(section, item) {
    this.setState(prevState => ({
      [section]: prevState[section].filter(x => x.id !== item.id)
    }))
  }

  render() {
    const { submitForm } = this.props;
    const { educationSections, experienceSections } = this.state;

    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm(this.state);
        }}
        className={FormStyles.form}>
        <GeneralInfo
          handleInputChange={(e) => this.handleInputChange(e, "general", false)}
        />
        <Skills
          handleAddSkill={this.handleAddSkill}
        />

        { /* Dynamically load education and experience sections by arrays in state */}

        {educationSections.map(education => {
          return (
            <Education
              key={education.id}
              id={education.id}
              renderSectionOptions={() => this.renderSectionOptions(education, "educationSections", { // Section name and new object - props to pass to Button components
                id: uniqid(),
                isInitial: true,
                institution: "",
                program: "",
                startDate: "",
                endDate: "",
              })}
              handleInputChange={(e) => this.handleInputChange(e, "educationSections", true, education)}
            />
          )
        })}

        {experienceSections.map(experience => {
          return (
            <Experience
              key={experience.id}
              id={experience.id}
              renderSectionOptions={() => this.renderSectionOptions(experience, "experienceSections", { // Section name and new object - props to pass to Button components
                id: uniqid(),
                isInitial: false,
                company: "",
                desc: "",
                startDate: "",
                endDate: "",
              })}
              handleInputChange={(e) => this.handleInputChange(e, "experienceSections", true, experience)}
            />
          )
        })}

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
