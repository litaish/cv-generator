import React from "react";
import FormStyles from "../styles/Form.module.css";

const AddButton = ( {addSection} ) => {
    return (
        <button
            onClick={addSection} // Trigger the function passed to Add Button
            className={FormStyles.button__green} type="button">
            Add Section
        </button>
    );
}

export default AddButton;
