import { Container, Row, Col } from "react-bootstrap";
import React from 'react';

export const BreakPoint = () => {
  return (
    <section className="breakpoint-section">
      <Container>
        <Row>
          <Col>
            <h2 className="breakpoint-title">Save big with our cheap car rental!</h2>
            <h3 className="breakpoint-title2">Top Airports. Local Suppliers. <span className="bp-title2-span">24/7</span> Support</h3>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BreakPoint;