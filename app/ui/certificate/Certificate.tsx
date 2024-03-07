import React from "react";
import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";

const Certificate = () => {
  return (
    <section className="section-certificate">
      <div className="container">
        <div className="content">
          <h2 className="content-title">My Certificates</h2>
          <div className="content-certif">
            <div className="content-inner">
              <div className="inner-image">
                <img src="../../../images/code/code1.jpeg" alt="" />
              </div>
              <div className="inner-texte">
                <p>Google UX Design Certificate</p>
                <FontAwesomeIcon width={"15px"} icon={faArrowUp} />
              </div>
            </div>
            <div className="content-inner">
              <div className="inner-image">
                <img src="../../../images/code/code1.jpeg" alt="" />
              </div>
              <div className="inner-texte">
                <p>Google UX Design Certificate</p>
                <FontAwesomeIcon width={"15px"} icon={faArrowUp} />
              </div>
            </div>
            <div className="content-inner">
              <div className="inner-image">
                <img src="../../../images/code/code1.jpeg" alt="" />
              </div>
              <div className="inner-texte">
                <p>Google UX Design Certificate</p>
                <FontAwesomeIcon width={"15px"} icon={faArrowUp} />
              </div>
            </div>
            <div className="content-inner">
              <div className="inner-image">
                <img src="../../../images/code/code1.jpeg" alt="" />
              </div>
              <div className="inner-texte">
                <p>Google UX Design Certificate</p>
                <div className="icon">
                  <FontAwesomeIcon width={"15px"} icon={faArrowUp} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
