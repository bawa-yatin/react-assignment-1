// Navbar Section

import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar(props) {
  const style = {
    marginLeft: "0.8rem",
    paddingBottom: "0",
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="#" className="navbar-brand ml-5 h6" style={style}>
          <i
            className="fa fa-users"
            aria-hidden="true"
            style={{ marginRight: "10px" }}
          ></i>
          {props.app_name}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item h6 mb-0 mx-2 active">
              <Link to="/" className="nav-link">
                User Form
              </Link>
            </li>
            <li className="nav-item h6 mb-0 mx-2">
              <Link to="/userlist" className="nav-link">
                User List
              </Link>
            </li>
            <li className="nav-item h6 mb-0 mx-2">
              <Link to="/colleges" className="nav-link">
                Colleges
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  app_name: "My Portfolio",
};

export default Navbar;
