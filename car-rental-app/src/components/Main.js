import { Container, Row, Col } from "react-bootstrap";
import React from 'react';

export const MainPage = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <h1 className="main-header-h1">Plan your trip now</h1>
            <h2 className="main-header-h2">Save <span>Big</span> with our car rental</h2>
            <p className="main-header-info-text">Rent the car of your dreams. Unbeatable prices, unlimited miles, flexable pick-up options and much more.</p>
            <button className="book-rides-btn">Book Rides</button>
            <button className="learn-more-btn">Learn More</button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MainPage;