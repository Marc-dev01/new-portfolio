import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFont, faPen } from "@fortawesome/free-solid-svg-icons";

const Interet = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="content">
          <h2 className="content-title">What You Will get</h2>
          <div className="content-inner">
            <div className="inner-one" id="one-bag">
              <div className="inner-icon">
                <FontAwesomeIcon width={"25px"} icon={faFont} />
              </div>
              <h4 className="inner-title">Global Style Guide</h4>
              <p className="inner-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, at porro perferendis atque.
              </p>
            </div>
            <div className="inner-one">
              <div className="inner-icon">
                <FontAwesomeIcon width={"25px"} icon={faPen} />
              </div>
              <h4 className="inner-title">Global Style Guide</h4>
              <p className="inner-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, at porro perferendis atque.
              </p>
            </div>
            <div className="inner-one" id="one-bag">
              <div className="inner-icon">
                <FontAwesomeIcon width={"25px"} icon={faPen} />
              </div>
              <h4 className="inner-title">Global Style Guide</h4>
              <p className="inner-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, at porro perferendis atque.
              </p>
            </div>
            <div className="inner-one">
              <div className="inner-icon">
                <FontAwesomeIcon width={"25px"} icon={faPen} />
              </div>
              <h4 className="inner-title">Global Style Guide</h4>
              <p className="inner-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, at porro perferendis atque.
              </p>
            </div>
            <div className="inner-one" id="one-bag">
              <div className="inner-icon">
                <FontAwesomeIcon width={"25px"} icon={faPen} />
              </div>
              <h4 className="inner-title">Global Style Guide</h4>
              <p className="inner-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, at porro perferendis atque.
              </p>
            </div>
            <div className="inner-one">
              <div className="inner-icon">
                <FontAwesomeIcon width={"25px"} icon={faPen} />
              </div>
              <h4 className="inner-title">Global Style Guide</h4>
              <p className="inner-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, at porro perferendis atque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interet;
