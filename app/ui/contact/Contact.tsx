import React from "react";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section className="section-contact">
      <div className="container">
        <div className="content">
          <h2 className="contact-title">Contact Me</h2>
          <div className="contact-group">
            <div className="group-icon">
              <div className="icon-blog">
                <div className="icon-font">
                  <FontAwesomeIcon
                    width={"25px"}
                    icon={faPhone}
                    id="phone-icon"
                  />
                </div>
                <div className="texte-contact">
                  <span>Call Me</span>
                  <p> +123 456 7890</p>
                </div>
              </div>
              <div className="icon-blog">
                <div className="icon-font">
                  <FontAwesomeIcon
                    width={"25px"}
                    icon={faLocationDot}
                    id="phone-icon"
                  />
                </div>
                <div className="texte-contact">
                  <span>Adress</span>
                  <p> Ivory cost bp416</p>
                </div>
              </div>
              <div className="icon-blog">
                <div className="icon-font">
                  <FontAwesomeIcon
                    width={"25px"}
                    icon={faEnvelope}
                    id="phone-icon"
                  />
                </div>
                <div className="texte-contact">
                  <span>Email</span>
                  <p> marcdev002@gmail.com</p>
                </div>
              </div>
            </div>
            <form action="" className="form-contact">
              <h3> Drop a Line</h3>
              <div className="champ-contact">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Phone" />
                <input type="text" placeholder="Budget" />
              </div>
              <textarea
                name="texte"
                id="monTextarea"
                rows={5}
                cols={40}
                placeholder="Message"
              ></textarea>
              <button className="btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
