import React from "react";
import contact from "../assets/contact-img.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${contact})` }}
      ></div>
      <div className="rightSide">
        <h3> Contact</h3>
        <div className="contact-items">
          <div className="contactItem">
            <div class="contactCard">
              <h4>Mail</h4>
              {/* <a href = "mailto:gyplandinvestement@yahoo.com"> </a> */}
              <p>gyplandinvestement@yahoo.com</p>
            </div>
          </div>

          <div className="contactItem">
            <div class="contactCard">
              <h4>Telefon</h4>
              {/* <a href="tel:0785 312 111"></a>
              <a href="tel:"></a> */}
              <p>0785 312 111</p>
              <p>0768 426 280</p>
              <p>0774 036 943</p>
            </div>
          </div>
        </div>

        <h3>Metode de plată</h3>
        <div className="plata-items">
          <div class="contactCard">
            <h4>Banca Transilvania</h4>
            <h4>Iban</h4>
            <p>RO57BTRLRONCRT0595689502</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
