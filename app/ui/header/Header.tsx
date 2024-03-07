import React from "react";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";

const Header = () => {
  return (
    <header className="section-header">
      <div className="container">
        <div className="contente">
          <div className="header-logo">
            <a href="">1'12</a>
          </div>
          <div className="header-nav">
            <ul className="nav-bar">
              <li className="nav-group">
                <a href="" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-group">
                <a href="" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-group">
                <a href="" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-group">
                <a href="" className="nav-link">
                  Projects
                </a>
              </li>
              <li className="nav-group">
                <a href="" className="nav-link">
                  <span> Blog</span>
                  <FontAwesomeIcon
                    width={"15px"}
                    icon={faCaretDown}
                    className="icon"
                  />
                </a>
              </li>
            </ul>
            <FontAwesomeIcon
              width={"25px"}
              icon={faBars}
              className="icon-bars"
            />
          </div>
          <div className="header-link">
            <a href="">Download CV</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
