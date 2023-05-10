import AppStyles from "./styles/App.module.css";
import Header from "./components/Header";
import Form from "./components/Form";
import CV from "./components/CV";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      formData: {}
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e, data) {
    e.preventDefault();

    this.setState({
      formData: data
    })
  }

  render() {
    const { general, skills, educationSections, experienceSections } = this.state;
    return (
      <div className={AppStyles.container}>
        <Header />
        <Form onSubmit={this.handleSubmit} />
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
