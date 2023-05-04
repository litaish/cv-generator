import AppStyles from "./styles/App.module.css";
import Header from "./components/Header";
import Form from "./components/Form";
import CV from "./components/CV";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
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
