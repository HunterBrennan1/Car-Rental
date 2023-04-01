import { Container, Row, Col } from "react-bootstrap";
import React from 'react';
import PhoneIcon from "../assets/img/iconmonstr-phone-1.svg"
import MailIcon from "../assets/img/iconmonstr-email-3.svg"
import MarkerIcon from "../assets/img/marker-icon.svg"


export const Contact = () => {
  return (
    <section>
      <section className="hero-pages">
        <div className="hero-pages__overlay"></div>
        <Container>
          <div className="hero-pages__text">
            <h3>Contact</h3>
            <p>Home / Contact</p>
          </div>
        </Container>
      </section>
      <Container>
        <div className="contact-div">
          <div className="contact-div__text">
            <h2>Need additional information?</h2>
            <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
            <a><img src={PhoneIcon}></img> (123)-456-789</a>
            <a><img src={MailIcon}></img> carrental@carmail.com</a>
            <a><img src={MarkerIcon}></img> Toms River, New Jersey</a>
          </div>
          <div className="contact-div__form">
            <form>
              <label>Full Name
                <b>*</b>
              </label>
              <input type="text" placeholder="E.g: Joe Shmoe"></input>
              <label>
                Email
                <b>*</b>
              </label>
              <input type="email" placeholder="youremail@example.com"></input>
              <label>Tell us about it
                <b>*</b>
              </label>
              <textarea placeholder="Write Here..."></textarea>
              <button type="submit">
                <a><img src={MailIcon}></img> Send Message</a>
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Contact;