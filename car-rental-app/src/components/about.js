
import { Container, Row, Col } from "react-bootstrap";
import React from 'react';
import AboutImg from '../assets/img/about-main-img.jpg';
import TruckIcon from '../assets/img/truckicon.png';
import CarIconAbout from '../assets/img/cariconabout.png';
import GarageIcon from '../assets/img/garageicon.png';
import PhoneIcon from '../assets/img/iconmonstr-phone-1.svg'
import ThreeBubbles from "./threebubbles";
import Footer from "./footer";
import BookBanner from "./bookbanner";



export const About = () => {
  return (
    <section>
      <div className='about-hero-section'>
        <div className="hero-overlay"></div>
      </div>
      <Container className="hero-container">
        <Row>
          <Col>
            <div className="about-main-wrapper">
              <div>
                <img className="about-img" src={AboutImg}></img>
              </div>
              <div>
                <div className="about-main-text">
                  <h2 className="about-main-text-title1">About Company</h2>
                  <h3 className="about-main-text-title2">You start the engine and your adventure begins</h3>
                  <p className="about-main-text1">We're revolutionizing conventional car ownership and making driving with us as easy as buying shoes online. An instant, flexible car subscription from your favorite brands that includes everything except for fuel. With the fully digital process, you save not only time and effort but also avoid high costs. No more annoying service station visits and no hidden costs. Just give it a try!</p>
                </div>
                <div className="block-wrapper">
                  <div className="about-block-info">
                    <img className="about-block-img" src={TruckIcon}></img>
                    <div className="about-block-text">
                      <h3 className="about-block-text-1">20</h3>
                      <p className="about-block-text-2">Car<br></br>Types</p>
                    </div>
                  </div>
                  <div className="about-block-info">
                    <img className="about-block-img" src={CarIconAbout}></img>
                    <div className="about-block-text">
                      <h3 className="about-block-text-1">85</h3>
                      <p className="about-block-text-2">Rental<br></br>Outlets</p>
                    </div>
                  </div>
                  <div className="about-block-info">
                    <img className="about-block-img garage" src={GarageIcon}></img>
                    <div className="about-block-text">
                      <h3 className="about-block-text-1">75</h3>
                      <p className="about-block-text-2">Repair<br></br>Shop</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ThreeBubbles />


          </Col>
        </Row>
      </Container>
      <BookBanner />
      <Footer />
    </section>
  )
}

export default About;