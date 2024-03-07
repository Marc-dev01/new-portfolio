import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="section-footer">
      <div className="container">
        <div className="content">
          <div className="footer-title">
            <h2>Need a Design Service </h2>
          </div>
          <div className="footer-text">
            <p>
              I Can Do Mobile App Ui Design, Website, Dashboard, Ux Research,
              Admin, Panel, Prototyping, Wireframing, Usability testing
            </p>
          </div>
          <div className="footer-link">
            <a href="">Behance</a>
            <a href="">Dribble</a>
            <a href="">Facebook</a>
            <a href="">Linkedin</a>
          </div>
          <div className="footer-para">
            <p>
              Still, thinking? Let&lsquo;s start the conversation and get things
              going
            </p>
            <div className="footer-email">
              <span>Email:</span> <a href="Email"> marcdev002@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
