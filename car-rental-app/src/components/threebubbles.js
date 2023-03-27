import { Container, Row, Col } from "react-bootstrap";
import React from 'react';
import SelectCar from "../assets/img/select-car-icon.svg"
import OperatorIcon from "../assets/img/customer.svg"
import DriveIcon from "../assets/img/drive-icon.svg"

export const ThreeBubbles = () => {
  return (
    <section className="bubbles-section">
      <Container>
        <Row>
          <Col>
            <h2 className="bubbles-section-title">Plan your Trip now</h2>
            <h3 className="bubbles-section-title2">Quick & easy car rental</h3>
            <div className="bubbles-container">
              <div className="bubble">
                <img className="select-car-icon" src={SelectCar}></img>
                <h4 className="bubble-title">Select Car</h4>
                <p className="bubble-text">We offer a wide range of vehicles for all your driving needs. We have the perfect car for your destination</p>
              </div>
              <div className="bubble">
                <img className="select-car-icon" src={OperatorIcon}></img>
                <h4 className="bubble-title">Contact Operator</h4>
                <p className="bubble-text">Our Knowledgeable and friendly operators all always ready to help with any questions or concerns</p>

              </div>
              <div className="bubble">
                <img className="select-car-icon" src={DriveIcon}></img>
                <h4 className="bubble-title">Let's Drive</h4>
                <p className="bubble-text">Whether you're hitting the open road, or need a vehicle for the weekend, we've got you covered with our wide rang of cars</p>

              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default ThreeBubbles;