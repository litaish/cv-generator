import AppStyles from "./styles/App.module.css";
import Header from "./components/Header";
import DataForm from "./components/DataForm";
import CV from "./components/CV";
import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e, data) => {
    // Prevent form from submitting on submit
    e.preventDefault();
    // Set state to passed in form data (form state)
    setFormData(data);
    // Reset all form fields on submit
    e.target.reset();
  }

  return (
    <div className={AppStyles.container}>
      <Header />
      <DataForm submitForm={handleSubmit} />
      <CV general={formData.general}
        skills={formData.skills}
        educationSections={formData.educationSections}
        experienceSections={formData.experienceSections}
      />
    </div>
  )
}

export default App;
