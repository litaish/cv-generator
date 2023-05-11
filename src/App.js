import AppStyles from "./styles/App.module.css";
import Header from "./components/Header";
import DataForm from "./components/DataForm";
import CV from "./components/CV";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      formData: {},
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    this.setState({
      formData: data
    })
  }

  render() {
    const { formData } = this.state;

    return (
      <div className={AppStyles.container}>
        <Header />
        <DataForm submitForm={this.handleSubmit} />
        <CV general={formData.general}
          skills={formData.skills}
          educationSections={formData.educationSections}
          experienceSections={formData.experienceSections}
        />
      </div>
    )
  }
}

export default App;
