import { Container, Row, Col } from "react-bootstrap";
import React from 'react';
import Phone from '../assets/img/phoneapp.webp';
import Google from '../assets/img/google-play-btn.png';

export const AppStore = () => {
  return (
    <section className="appstore-section">
      <Container>
        <Row>
          <Col>
            <div className="app-wrapper">
              <div className="app-info-container">
                <div>
                  <h2 className="app-title">Download our app to get most out of it</h2>
                  <p className="app-text">With over 10,000 positive reviews, We will ensure you are satisfied with our quick and efficient mobile renting options. Stranded in a strange place? place a quick mobile order at your nearest location and pick up your car in a speedy fasion!</p>
                </div>
                <div className="google-img">
                  <img src={Google} className="google-img-l"></img>
                </div>
              </div>
              <div className="phone-img-container">
                {/* <img src={Phone} class="phone-img"></img> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AppStore;