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
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>Aici ne porti scrie!</p>
                </div>
                <div class="flip-card-back">
                  <h4>Mail</h4>
                  <p>gabi.dae.gd@gmail.com</p>
                  <p>Asteptam mesajul tau!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contactItem">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>Aici ne porti suna!</p>
                </div>
                <div class="flip-card-back">
                  <h4>Telefon</h4>
                  <p>0761 601 042</p>
                  <p>Asteptam apelul tau!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3>Metode de plata</h3>
        <div className="plata-items">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <p>Banca Transilvania</p>
              </div>
              <div class="flip-card-back">
                <h4>Iban</h4>
                <p>RO57BTRLRONCRT0595689502</p>
              </div>
            </div>
          </div>
        </div>

        {/* <form id="contact-form" method="POST">
          <label htmlFor="name">Nume </label>
          <input name="name" placeholder="Ion Popescu" type="text" required />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="ionpopescu@gmail.com"
            type="email"
            required
          />
          <label htmlFor="message">Mesaj</label>
          <textarea
            rows="6"
            placeholder="Scrieti mesaj aici..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Trimite Mesaj</button>
        </form> */}
      </div>
    </div>
  );
}

export default Contact;
