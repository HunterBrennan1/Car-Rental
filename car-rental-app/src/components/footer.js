import { Container, Row, Col } from "react-bootstrap";
import React from 'react';
import PhoneIcon from "../assets/img/iconmonstr-phone-1.svg"
import MailIcon from "../assets/img/iconmonstr-email-3.svg"

export const Footer = () => {
  return (
    <section className="footer-section">
      <Container>
        <Row>
          <Col>
            <div className="footer-wrapper">
              <div className="footer-info-container">
                <h2 className="footer-title"><span className="footer-title-span">CAR</span> Rental</h2>
                <p>We offer a wide range of vehicles for allyour driving needs. We have the perfect car for any situation.</p>
                <p className="footer-text"><img src={PhoneIcon} className="footer-icon" ></img>123-456-789</p>
                <p className="footer-text"><img src={MailIcon} className="footer-icon"></img>carrental@gmail.com</p>
              </div>
              <div className="footer-info-container">
                <h2 className="footer-title">COMPANY</h2>
                <p className="footer-text">New York</p>
                <p className="footer-text">Careers</p>
                <p className="footer-text">Mobile</p>
                <p className="footer-text">Blog</p>
                <p className="footer-text">How we work</p>
              </div>
              <div className="footer-info-container">
                <h2 className="footer-title">WORKING HOURS</h2>
                <p className="footer-text">Mon - Fri 9:00AM - 9:00PM</p>
                <p className="footer-text">Sat: 9:00AM - 9:00PM</p>
                <p className="footer-text">Sun: Closed</p>
              </div>
              <div className="footer-info-container">
                <h2 className="footer-title">SUBSCRIPTION</h2>
                <p className="footer-text">Apply with your Email adress for latest news & updates.</p>
                <input className="footer-input" type="email" placeholder="Enter Email Adress"></input>
                <button className="footer-submit-btn">Submit</button>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Footer;