import React from "react";
import "./banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance } from "@fortawesome/free-brands-svg-icons";

import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons/faGithubAlt";

import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";

import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";
import Image from "next/image";
const Banner = () => {
  return (
    <section className="section-banner">
      <div className="container">
        <div className="content">
          <div className="content-inner">
            <div className="inner-description">
              <p className="inner-title">
                Hi, I&lsquo;m <span>Mazen</span>
                <br /> Creative <strong>UI/UX Designer</strong>
              </p>
              <div className="inner-group">
                <div className="trait"></div>
                <span>Visual Designer</span>
              </div>
              <p className="inner-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                temporibus, pariatur ullam aliquam voluptate, eaque assumenda
                officiis fugit, quos porro commodi ipsa repudiandae. Magni odit
                quia, officiis aperiam beatae hic non eos et tempora, dolorum
                nesciunt repudiandae perspiciatis alias dicta?
              </p>
              <div className="inner-btn">
                <a href="" className="btn">
                  Hire Me
                  <FontAwesomeIcon width={"15px"} icon={faArrowUp} />
                </a>
                <a href="">View Portfolio</a>
              </div>
              <div className="inner-social">
                <h3 className="title"> Social Media</h3>
                <div className="social-link">
                  <a href="">
                    <FontAwesomeIcon width={"15px"} icon={faFacebookF} />
                  </a>
                  <a href="" className="social-icon">
                    <FontAwesomeIcon width={"20px"} icon={faBehance} />
                  </a>
                  <a href="">
                    <FontAwesomeIcon width={"20px"} icon={faGithubAlt} />
                  </a>
                  <a href="">
                    <FontAwesomeIcon width={"20px"} icon={faLinkedinIn} />
                  </a>
                </div>
              </div>
            </div>
            <div className="banner-image">
              <Image
                src={"/images/banner-image.PNG"}
                alt="banner"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
