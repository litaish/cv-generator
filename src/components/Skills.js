import React from "react";
import FormStyles from "./Form.module.css";

class Skills extends React.Component {
    render() {
        return (
            <div className={FormStyles.section}>
            <div className={FormStyles.title}>
                <p>Skills</p>
                <p>Name your skills. Could be programming languages</p>
            </div>
            <div className={FormStyles.group}>
              <div className={FormStyles.row}>
                <label htmlFor="skills">Skills (Write skill in new line)</label>
                <textarea id="skills" placeholder="Java"></textarea>
              </div>
            </div>
          </div>
        );
    }
}

export default Skills;