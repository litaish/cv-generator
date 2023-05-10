import AppStyles from "./styles/App.module.css";
import Header from "./components/Header";
import Form from "./components/Form";
import CV from "./components/CV";
import { Component } from "react";
import uniqid from "uniqid";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      general: {
        name: "Alexandra Johnson",
        phone: "(415)123-4567",
        email: "github.com/alexandraj",
        github: "github.com/mygithub",
        desc: "Creative software engineer with a passion for artificial intelligence and sustainability",
      },
      skills: [{
        id: uniqid(),
        title: "Java"
      },
      {
        id: uniqid(),
        title: "C#"
      },
      {
        id: uniqid(),
        title: "Machine Learning"
      }],
      educationSections: [{
        id: uniqid(),
        institution: "Massachusetts Institute of Technology",
        program: "Bachelor's degree in Computer Science",
        startDate: "08/01/2016",
        endDate: "06/01/2020",
      }],
      experienceSections: [{
        id: uniqid(),
        company: "Tesla",
        position: "Software Engineer",
        desc: "Implemented machine learning algorithms for autonomous driving systems",
        startDate: "07/01/2020",
        endDate: "07/01/2022",
      }]
    }
  }
  render() {
    const { general, skills, educationSections, experienceSections } = this.state;
    return (
      <div className={AppStyles.container}>
        <Header />
        <Form />
        <CV general={general}
          skills={skills}
          educationSections={educationSections}
          experienceSections={experienceSections}
        />
      </div>
    )
  }
}

export default App;
