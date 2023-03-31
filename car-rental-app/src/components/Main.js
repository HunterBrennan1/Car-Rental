import { Container, Row, Col } from "react-bootstrap";
import React from 'react';
import RedCar from '../assets/img/red-car-main.png';
import CheckMark from '../assets/img/verify-verified-check-icon.svg';
import Arrow from '../assets/img/arrow.svg';
import BgShape from '../assets/img/bgshape.png';

export const MainPage = () => {
  return (
    <section className="main-section">
      <Container className="main-container">
        <div>
          <img className="bg-shape" src={BgShape}></img>
        </div>
        <Row className="main-row">
          <Col className="main-info-col">
            <h1 className="main-header-h1">Plan your trip now</h1>
            <h2 className="main-header-h2">Save <span className="big-span">BIG</span> with our car rentals</h2>
            <p className="main-header-info-text">Rent the car of your dreams. Unbeatable prices, unlimited miles, flexable pick-up options and much more.</p>
            <div className="main-btn-container">
              <button href="#book" className="book-rides-btn main-btn">Book Rides <img className="check-mark" src={CheckMark}></img></button>
              <button className="learn-more-btn main-btn">Learn More <img className="learn-arrow" src={Arrow}></img></button>
            </div>
          </Col>
          <Col className="main-img-container">
            <img className="red-car-main-img" src={RedCar}></img>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MainPage;