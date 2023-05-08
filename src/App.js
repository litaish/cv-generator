import AppStyles from "./styles/App.module.css";
import Header from "./components/Header";
import Form from "./components/Form";
import CV from "./components/CV";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      generalSections: [{
        name: "George Bush",
        phone: 123,
        email: "example@email.com",
        github: "github.com/mygithub",
        desc: "Something about me",
      }],
      skills: ["Java", "C#", "Python"],
      educationSections: [{
        institution: "Yale",
        program: "Master's degree in Business",
        startDate: "01/02/03",
        endDate: "02/03/04",
      }],
      experienceSections: [{
        company: "Microsoft",
        desc: "Made many AI solutions",
        startDate: "06/08/09",
        endDate: "10/11/11",
      }]
    }
  }
  render() {
    return (
      <div className={AppStyles.container}>
        <Header />
        <Form />
        <CV />
      </div>
    )
  }
}

export default App;
