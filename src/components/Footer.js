import React from "react";
import github from "../image/github-icon.png";
import whatsapp from "../image/whatsapp-icon.png";
import linked from "../image/linkedin-icon.png";
import email from "../image/email-icon.png";

const Footer = () => {
  const contactLinkedin = () => {
    window.open("https://www.linkedin.com/in/lucas-vssouza/", "_blank").focus();
  };

  const contactGithub = () => {
    window.open("https://github.com/lucasvssouza/", "_blank").focus();
  };

  const contactWhatsapp = () => {
    window.open("https://wa.me/+5511966929698", "_blank").focus();
  };

  const contactEmail = () => {
    window.open("mailto:lucas_vss@hotmail.com", "_blank").focus();
  };

  return (
    <footer>
      <div className="footer">
        <div>© Lucas Souza 2022</div>
        <div className="contact">
          <img
            src={linked}
            className="contact-item"
            onClick={contactLinkedin}
          ></img>
          <img
            src={github}
            className="contact-item"
            onClick={contactGithub}
          ></img>
          <img
            src={whatsapp}
            className="contact-item"
            onClick={contactWhatsapp}
          ></img>
          <img
            src={email}
            className="contact-item"
            onClick={contactEmail}
          ></img>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
