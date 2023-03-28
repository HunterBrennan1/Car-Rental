import { Container, Row, Col } from "react-bootstrap";
import React from 'react';
import Cars from '../assets/img/cars.png';
import Car from "../assets/img/iconmonstr-car-2.svg"
import Coin from "../assets/img/iconmonstr-coin-2.svg"
import Card from "../assets/img/iconmonstr-credit-card-12.svg"

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
              <div className="package-left-info">
                <h2 className="info-title">Why Choose Us?</h2>
                <h3 className="info-title2">Best valued deals you will ever find</h3>
                <p className="info-text">Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money. so you can enjoy top Quality services and products without breaking the bank. Our deal are designed to give you the ultimate renting experience. So don't miss out on your chance to save big.</p>
                <button className="info-btn">Find Details</button>
              </div>
              <div className="package-side-info">
                <div className="package-side-info-container">
                  <div className="package-row">
                    <div>
                      <img src={Car} className="side-info-img"></img>
                    </div>
                    <div>
                      <h2 className="package-title">Cross Country Drive</h2>
                      <p className="package-text">Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures</p>
                    </div>
                  </div>
                </div>
                <div className="package-side-info-container">
                  <div className="package-row">
                    <div>
                      <img src={Coin} className="side-info-img"></img>
                    </div>
                    <div>
                      <h2 className="package-title">All Inclusive Pricing</h2>
                      <p className="package-text">Get everything you need in one convenient, transparent price with our all-inclusive pricing policy</p>
                    </div>
                  </div>
                </div>
                <div className="package-side-info-container">
                  <div className="package-row">
                    <div>
                      <img src={Card} className="side-info-img"></img>
                    </div>
                    <div>
                      <h2 className="package-title">No Hidden Charges</h2>
                      <p className="package-text">Enjoy peace of mind with our no hidden charges policy. We belive in transparent and honest pricing.</p>
                    </div>
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