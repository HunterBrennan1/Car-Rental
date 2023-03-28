import { Container, Row, Col } from "react-bootstrap";
import React from 'react';
import Coin from "../assets/img/iconmonstr-coin-2.svg"
import Quote from "../assets/img/quote.svg";
import Profile1 from "../assets/img/profile1.png"
import Profile2 from "../assets/img/profile2.webp"


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
            <div className="reviews">
              <div className="review-box">
                <div className="review-container">
                  <p className="review">"We rented a car from this website and had an amazin experience! The booking was easy and the rental rates were very affordable."</p>
                  <div className="review-profile-container">
                    <div className="profile-img-name-location">
                      <div>
                        <img src={Profile1} className="review-img"></img>
                      </div>
                      <div className="review-owner-container">
                        <h3 className="profile-review-name">Ivan Mata</h3>
                        <h4 className="profile-review-location">California</h4>
                      </div>
                    </div>
                    <div>
                      <img src={Quote} className="review-img"></img>
                    </div>
                  </div>
                </div>
              </div>
              <div className="review-box">
                <div className="review-container">
                  <p className="review">"We rented a car from this website and had an amazin experience! The booking was easy and the rental rates were very affordable."</p>
                  <div className="review-profile-container">
                    <div className="profile-img-name-location">
                      <div>
                        <img src={Profile2} className="review-img"></img>
                      </div>
                      <div className="review-owner-container">
                        <h3 className="profile-review-name">Jonathan Limon</h3>
                        <h4 className="profile-review-location">New Jersey</h4>
                      </div>
                    </div>
                    <div>
                      <img src={Quote} className="review-img"></img>
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

export default Reviews;