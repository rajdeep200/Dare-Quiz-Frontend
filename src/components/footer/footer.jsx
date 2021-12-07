import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="upper__footer">
        <Link to="/privacy-policy">
          <div className="footer__item">Privacy Policy</div>
        </Link>
        <Link to="/terms-and-conditions">
          <div className="footer__item">Terms & Conditions</div>
        </Link>
        <Link to="/about">
          <div className="footer__item">About us</div>
        </Link>
      </div>
      <div className="lower__footer">
        <a
          href="mailto:dareyoubuddy@gmail.com"
          className="lower__footerLink"
          style={{ color: "white" }}
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Footer;
