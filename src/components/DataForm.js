import React, { useState } from "react";
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

const DataForm = ({ submitForm }) => {
  const [formData, setFormData] = useState({
    general: {
      name: "",
      phone: "",
      email: "",
      github: "",
      about: ""
    },
    skills: [],
    experienceSections: [{
      id: uniqid(),
      isInitial: true,
      company: "",
      desc: "",
      startDate: "",
      endDate: "",
    }],
    educationSections: [{
      id: uniqid(),
      isInitial: true,
      institution: "",
      program: "",
      startDate: "",
      endDate: "",
    }],
  })

  // Gets input from specific form section input field and changes state object values
  const handleInputChange = (e, sectionName, hasMultipleSections, item = {}) => {
    if (hasMultipleSections) {
      setFormData((prevState) => {
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
          ...prevState,
          [sectionName]: newArray
        }
      })
    } else {
      setFormData((prevState) => ({
        // In functional components, you have to keep merging the other states
        ...prevState,
        sectionName: {
          ...prevState[sectionName],
          [e.target.name]: e.target.value
        }
      }))
    }
  }

  const handleAddSkill = e => setFormData((prevState) => ({
    // Merging state, so the whole state is not overwritten with just one skills object
    ...prevState,
    skills: e.target.value.split("\n")
  }))

  const handleLoadExampleData = json => {
    const { general, educationSections, experienceSections, skills } = json;

    setFormData({ general, educationSections, experienceSections, skills })
  }

  // Checks if component is initial (first), so it doesn't render a delete section button for it
  const renderSectionOptions = (item, section, newItem) => {
    if (item.isInitial) {
      return (
        <>
          <AddButton
            addSection={() => handleAddSection(section, newItem)} // Pass in handleAddSection as prop, by defining which section and the new object
          />
        </>
      )
    } else {
      return (
        <>
          <AddButton
            addSection={() => handleAddSection(section, newItem)} // Pass in handleAddSection as prop, by defining which section and the new object
          />
          <DeleteButton
            removeSection={() => handleRemoveSection(section, item)} // Remove section by id
          />
        </>
      )
    }
  }

  const handleAddSection = (section, newItem) => setFormData((prevState) => ({
    ...prevState,
    [section]: [...prevState[section], newItem] // Access section from prevState via array, not dot notation
  }))

  // Set specific section (experienceSections or educationSections) to a new array, filtering previousState array
  const handleRemoveSection = (section, item) => setFormData((prevState) => ({
    ...prevState,
    [section]: prevState[section].filter(x => x.id !== item.id)
  }))

  return (
    <form
      onSubmit={(e) => {
        submitForm(e, formData);
      }}
      className={FormStyles.form}>
      <GeneralInfo
        handleInputChange={(e) => handleInputChange(e, "general", false)}
      />
      <Skills
        handleAddSkill={handleAddSkill}
      />

      { /* Dynamically load education and experience sections by arrays in state */}

      {formData.educationSections.map(education => {
        return (
          <Education
            key={education.id}
            id={education.id}
            renderSectionOptions={() => renderSectionOptions(education, "educationSections", { // Section name and new object - props to pass to Button components
              id: uniqid(),
              isInitial: false,
              institution: "",
              program: "",
              startDate: "",
              endDate: "",
            })}
            handleInputChange={(e) => handleInputChange(e, "educationSections", true, education)}
          />
        )
      })}

      {formData.experienceSections.map(experience => {
        return (
          <Experience
            key={experience.id}
            id={experience.id}
            renderSectionOptions={() => renderSectionOptions(experience, "experienceSections", { // Section name and new object - props to pass to Button components
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
        onClick={() => handleLoadExampleData(JSONExample)}
        className={FormStyles.row_btn}>
        <button className={`${FormStyles.btn__form__action} ${FormStyles.btn__load}`}>Load an Example</button>
      </div>
      <div
        onClick={() => handleLoadExampleData(JSONCleared)}
        className={FormStyles.row_btn}>
        <button className={`${FormStyles.btn__form__action} ${FormStyles.btn__clear}`}>Clear CV</button>
      </div>
      <div className={FormStyles.row_btn}>
        <button className={`${FormStyles.btn__form__action} ${FormStyles.btn__submit}`}>Submit Your Data</button>
      </div>
    </form>
  );
}

export default DataForm;
