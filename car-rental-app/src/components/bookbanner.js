import { Container, Row, Col } from "react-bootstrap";
import React from 'react';

export const BookBanner = () => {
  return (
    <section>
      <div className="about-banner">
        <Container>
          <div className="text-content">
            <h2 className="about-break-text">Book a car by getting in touch with us</h2>
            <span>
              <i className="fa-solid fa-phone phone-number"></i>
              <h3 className="about-number">(123) 456-7890</h3>
            </span>
          </div>
        </Container>
      </div>
    </section>
  )
}

export default BookBanner;