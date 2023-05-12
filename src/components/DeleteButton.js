import React from "react";
import FormStyles from "../styles/Form.module.css";

const DeleteButton = ({ removeSection }) => {
    return (
        <button
            onClick={removeSection} // Trigger the function passed to Delete Button
            className={FormStyles.button__red} type="button">
            Delete Section
        </button>
    );
}

export default DeleteButton;
