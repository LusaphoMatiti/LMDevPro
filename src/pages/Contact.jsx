import React from "react";
import "../styling/Contact.css";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div class="section contact" id="contact">
      <Title title="contact" subTitle="me" />
      <div class="title-underline"></div>
      <div class="contact-card">
        <div class="c-me">
          <div class="contact-item">
            <img src="phone-call.png" alt="call" />
            <p>Number:</p>
            <div class="myDetails">063 520 2097</div>
          </div>
          <div class="contact-item">
            <img src="arroba.png" alt="email" />
            <p>Email:</p>
            <div class="myDetails">Lusaphomatiti07@gmail.com</div>
          </div>
        </div>
        <div class="s-me">
          <h3>Social Media</h3>
          <div class="contact-item">
            <img src="instagram.png" alt="instagram" />
            <p>Instagram:</p>
            <div class="myDetails">@LM</div>
          </div>
          <div class="contact-item">
            <img src="linkedin.png" alt="linkedin" />
            <p>LinkedIn:</p>
            <div class="myDetails">Lusapho Matiti</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
