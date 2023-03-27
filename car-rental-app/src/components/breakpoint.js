import { Container, Row, Col } from "react-bootstrap";
import React from 'react';

export const BreakPoint = () => {
  return (
    <section className="breakpoint-section">
      <Container>
        <Row>
          <Col>
            <h2>Save big with our cheap car rental!</h2>
            <h3>Top Airports. Local Suppliers. <span>24/7</span> Support</h3>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BreakPoint;