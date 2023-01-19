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
                  <p>Aici ne poți scrie!</p>
                </div>
                <div class="flip-card-back">
                  <h4>Mail</h4>
                  <p>gyplandinvestement@yahoo.com</p>
                  <p>Așteptăm mesajul tău!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contactItem">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <p>Aici ne poți suna!</p>
                </div>
                <div class="flip-card-back">
                  <h4>Telefon</h4>
                  <p>0785 312 111</p>
                  <p>0768 426 280</p>
                  <p>Așteptăm apelul tău!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3>Metode de plată</h3>
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
