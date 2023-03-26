import { Container, Row, Col } from "react-bootstrap";
import React from 'react';
import RentalIcon from '../assets/img/rental-icon.svg';
import MarkerIcon from '../assets/img/marker-icon.svg';
import CalendarIcon from '../assets/img/calendar-icon.svg';


export const Rental = () => {
  return (
    <section className="rental-section" id="book">
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
                  <select type="text" name="type" className="rental-form-input" placeholder="Select your car type">
                    <option>Select Your Car Type</option>
                    <option>Audi A1 S-Line</option>
                    <option>VW Golf 6</option>
                    <option>Toyota Camary</option>
                    <option>BMW 320 ModernLine</option>
                    <option>Mercedes-Benz GLK</option>
                    <option>VW Passat CC</option>
                  </select>
                </div>
                <div>
                  <h4 className="rental-form-title"><img className="rental-icons" src={CalendarIcon}></img>Pick-Up Date</h4>
                  <input type="date" name="type" className="rental-form-input" placeholder="Select your car type"></input>
                </div>
              </div>
              <div className="rental-form">
                <div>
                  <h4 className="rental-form-title"><img className="rental-icons" src={MarkerIcon}></img>Pick-Up Location</h4>
                  <select type="text" name="type" className="rental-form-input" placeholder="Select your car type">
                    <option>Select Pick Up Location</option>
                    <option>Toms River</option>
                    <option>Seaside Heights</option>
                    <option>LakeWood</option>
                    <option>Atlantic City</option>
                    <option>Newark</option>
                  </select>
                </div>
                <div>
                  <h4 className="rental-form-title"><img id="book" className="rental-icons" src={CalendarIcon}></img>Drop-Off Date</h4>
                  <input type="date" name="type" className="rental-form-input" placeholder="Select your car type"></input>
                </div>
              </div>
              <div className="rental-form">
                <div>
                  <h4 className="rental-form-title"><img className="rental-icons" src={MarkerIcon}></img>Drop-Off Location</h4>
                  <select type="text" name="type" className="rental-form-input" placeholder="Select your car type">
                    <option>Select Drop Off Location</option>
                    <option>Toms River</option>
                    <option>Seaside Heights</option>
                    <option>LakeWood</option>
                    <option>Atlantic City</option>
                    <option>Newark</option>
                  </select>
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