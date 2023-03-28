import { Container, Row, Col } from "react-bootstrap";
import React from 'react';


export const FAQ = () => {
  return (
    <section className="faq-section">
      <Container>
        <Row>
          <Col>
            <div className="faq-header">
              <h2 className="faq-header-title">FAQ</h2>
              <h3 className="faq-header-title2">Frequently Asked Questions</h3>
              <p className="faq-header-text">Frequently Asked Questions About the Car Rental Booking Process on Our Website. Answers to Common Concerns and Inquiries.</p>
            </div>
            <div className="wrapper">

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FAQ;