import { Container, Row, Col } from "react-bootstrap";
import React from 'react';
import RentalIcon from '../assets/img/rental-icon.svg';
import MarkerIcon from '../assets/img/marker-icon.svg';
import CalendarIcon from '../assets/img/calendar-icon.svg';


export const Rental = () => {
  return (
    <section className="rental-section">
      <Container>
        <Row>
          <Col>
            <h2 className="car-booking-title"> Book a car</h2>
          </Col>
          <div className="rental-row">
            <div className="rental-col">
              <div className="rental-form">
                <div>
                  <h4 className="rental-form-title"><img className="rental-icons" src={RentalIcon}></img>Select Your Car Type</h4>
                  <input type="text" name="type" className="rental-form-input" placeholder="Select your car type"></input>
                </div>
                <div>
                  <h4 className="rental-form-title"><img className="rental-icons" src={CalendarIcon}></img>Pick-Up Date</h4>
                  <input type="date" name="type" className="rental-form-input" placeholder="Select your car type"></input>
                </div>
              </div>
              <div className="rental-form">
                <div>
                  <h4 className="rental-form-title"><img className="rental-icons" src={MarkerIcon}></img>Pick-Up Location</h4>
                  <input type="text" name="type" className="rental-form-input" placeholder="Select your car type"></input>
                </div>
                <div>
                  <h4 className="rental-form-title"><img className="rental-icons" src={CalendarIcon}></img>Drop-Off Date</h4>
                  <input type="date" name="type" className="rental-form-input" placeholder="Select your car type"></input>
                </div>
              </div>
              <div className="rental-form">
                <div>
                  <h4 className="rental-form-title"><img className="rental-icons" src={MarkerIcon}></img>Drop-Off Location</h4>
                  <input type="text" name="type" className="rental-form-input" placeholder="Select your car type"></input>
                </div>
                <div>
                  <button className="search-rental-btn">Search</button>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Rental;