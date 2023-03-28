import { Container, Row, Col } from "react-bootstrap";
import React from 'react';


export const Reviews = () => {
  return (
    <section className="review-section">
      <Container>
        <Row>
          <Col>
            <div className="reviews-titles-container">
              <div className="review-title-container">
                <h2 className="review-title">Reviewed by People</h2>
                <h3 className="review-title2">Clients Testimonial's</h3>
                <p className="review-text">Discover the positive impact we've made on our clients by reading through their testimonials. Our clients have experienced our service and results. They are eager to share their positive experience with you!</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Reviews;