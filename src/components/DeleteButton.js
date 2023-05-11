import React from "react";
import FormStyles from "../styles/Form.module.css";

class DeleteButton extends React.Component {
    render() {
        return (
            <button className={FormStyles.button__red} type="button">
                Delete
            </button>
        );
    }
}

export default DeleteButton;
