import {
  faQuoteLeft,
  faQuoteRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import "./style.css";

const Testimonial = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="content">
          <h2 className="title">Testimonials</h2>
          <div className="content-icon">
            <FontAwesomeIcon width={"25px"} icon={faStar} />
            <FontAwesomeIcon width={"25px"} icon={faStar} />
            <FontAwesomeIcon width={"25px"} icon={faStar} />
            <FontAwesomeIcon width={"25px"} icon={faStar} />
            <FontAwesomeIcon width={"25px"} icon={faStar} />
          </div>
          <div className="inner">
            <div className="inner-group">
              <p className="inner-para">
                <FontAwesomeIcon
                  width={"10px"}
                  icon={faQuoteLeft}
                  className="icon"
                />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                quibusdam ex iste sapiente modi tenetur voluptatem voluptatum
                cupiditate blanditiis nulla, autem dolorem dolor, asperiores
                tempore cumque quos praesentium harum! Ipsum, molestias.
                <FontAwesomeIcon
                  width={"10px"}
                  icon={faQuoteRight}
                  className="icon"
                />
              </p>
              <div className="inner-image">
                <Image
                  src={"/images/about-image.png"}
                  alt="temoin"
                  width={100}
                  height={100}
                  className="image"
                />
                <h3>Yasen Wale</h3>
              </div>
            </div>
            <div className="inner-group">
              <p className="inner-para">
                <FontAwesomeIcon
                  width={"10px"}
                  icon={faQuoteLeft}
                  className="icon"
                />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                quibusdam ex iste sapiente modi tenetur voluptatem voluptatum
                cupiditate blanditiis nulla, autem dolorem dolor, asperiores
                tempore cumque quos praesentium harum! Ipsum, molestias.
                <FontAwesomeIcon
                  width={"10px"}
                  icon={faQuoteRight}
                  className="icon"
                />
              </p>
              <div className="inner-image">
                <Image
                  src={"/images/about-image.png"}
                  alt="temoin"
                  width={100}
                  height={100}
                  className="image"
                />
                <h3>Yasen Wale</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
