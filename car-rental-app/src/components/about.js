
import { Container, Row, Col } from "react-bootstrap";
import React from 'react';


export const About = () => {
  return (
    <section>
      <div className='about-hero-section'>
        <div className="hero-overlay"></div>
        <Container className="hero-container">
          <div className='about-hero-text'>
            <h3>About</h3>
            <p>Home/About</p>
          </div>
        </Container>
      </div>
      <Container>
        <Row>
          <Col>

          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About;