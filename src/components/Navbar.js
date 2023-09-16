import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <a className="navbar-brand" href="#">
        {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitch1"
            onClick={props.toggleMode}
          />
          <label
            className={`custom-control-label ${
              props.mode === "dark" ? "text-light" : ""
            }`}
            htmlFor="customSwitch1"
          >
            Toggle Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Hello Everyone!",
  aboutText: "About",
};

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};
