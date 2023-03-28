import { Container, Row, Col } from "react-bootstrap";
import React from 'react';
import Cars from '../assets/img/cars.png';

export const Package = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <div>
              <img src={Cars} className="cars-img"></img>
            </div>
            <div className="package-section-content-container">
              <div>
                <h2>Why Choose Us?</h2>
                <h3>Best valued deals you will ever find</h3>
                <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money. so you can enjoy top Quality services and products without breaking the bank. Our deal are designed to give you the ultimate renting experience. So don't miss out on your chance to save big.</p>
                <button>Find Details</button>
              </div>
              <div>
                <div className="package-side-info-container">
                  <div>
                    <h2>Cross Country Drive</h2>
                    <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures</p>
                  </div>
                </div>
                <div className="package-side-info-container">
                  <div>
                    <h2>Cross Country Drive</h2>
                    <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures</p>
                  </div>
                </div>
                <div className="package-side-info-container">
                  <div>
                    <h2>Cross Country Drive</h2>
                    <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Package;