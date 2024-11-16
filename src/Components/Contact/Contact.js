import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:homegate.info@gmail.com">
        homegate.info@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com">
          User Name: Homegate
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com">
        Homegate
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com">
        Homegate
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+917869428576">
          +91 7869428576
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;