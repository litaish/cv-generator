import React from "react";
import HeaderStyles from "../styles/Header.module.css";

class Header extends React.Component {
  render() {
    return (
      <header className={HeaderStyles.header}>
        <h3>CV Generator</h3>
      </header>
    );
  }
}

export default Header;
