import React from "react";
import Form from "./Form";
import FormStyles from "./Form.module.css";

class GeneralInfo extends React.Component {
  render() {
    return (
      <div className={FormStyles.section}>
        <div className={FormStyles.title}>
          <p>General Info</p>
          <p>Provide information about yourself</p>
        </div>
        <div className={FormStyles.group}>
          <div className={FormStyles.row}>
            <label htmlFor="full_name">Full Name</label>
            <input
              id="full_name"
              type="text"
              placeholder="George Washington"
            ></input>
          </div>
          <div className={FormStyles.row}>
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" type="text" placeholder="(555) 555-1234"></input>
          </div>
          <div className={FormStyles.row}>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="example@domain.net"
            ></input>
          </div>
          <div className={FormStyles.row}>
            <label htmlFor="email">GitHub</label>
            <input
              id="email"
              type="text"
              placeholder="github.com/mygithub"
            ></input>
          </div>
          {/* <div className={FormStyles.row}>
            <div className={FormStyles.options}>
              <button className={FormStyles.button__red} type="button">
                Delete
              </button>
              <button className={FormStyles.button__green} type="button">
                Add
              </button>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default GeneralInfo;
