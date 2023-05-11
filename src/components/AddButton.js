import React from "react";
import FormStyles from "../styles/Form.module.css";

class AddButton extends React.Component {
    render() {
        return (
            <button className={FormStyles.button__green} type="button">
                Add
            </button>
        );
    }
}

export default AddButton;
