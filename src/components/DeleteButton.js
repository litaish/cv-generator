import React from "react";
import FormStyles from "../styles/Form.module.css";

class DeleteButton extends React.Component {
    render() {
        const { removeSection } = this.props;

        return (
            <button
                onClick={removeSection}
                className={FormStyles.button__red} type="button">
                Delete Section
            </button>
        );
    }
}

export default DeleteButton;
