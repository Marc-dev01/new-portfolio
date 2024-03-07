import React from "react";
import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const About = () => {
  return (
    <section className="section-about">
      <div className="container">
        <div className="content">
          <h2 className="content-title">About Me</h2>
          <div className="content-inner">
            <div className="inner-image">
              <Image
                src={"/images/about-image.PNG"}
                alt="about"
                width={300}
                height={300}
              />
            </div>
            <div className="inner-description">
              <h3 className="inner-title">Mazen Zekry</h3>
              <div className="inner-group">
                <div className="group-des">
                  <span>1+</span>
                  <p>Years Experience in Design</p>
                </div>
                <div className="trait"></div>
                <div className="group-des" id="des-content">
                  <span>20+</span>
                  <p>Successfully Projects Completed</p>
                </div>
                <div className="trait"></div>
                <div className="group-des" id="des-content">
                  <span>4+</span>
                  <p>Happy Clients</p>
                </div>
              </div>
              <div className="group-btn">
                <a href="" className="btn-dow">
                  Download CV
                  <span>
                    <FontAwesomeIcon width={"12px"} icon={faDownload} />
                  </span>
                </a>
                <a href="" className="btn-view">
                  View All Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
