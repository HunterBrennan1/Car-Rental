import { Container, Row, Col } from "react-bootstrap";
import React from 'react';
import Arrow from '../assets/img/downarrow.svg'
import { useState } from "react";
import MiniCoop from "../assets/img/minicoop.png"


function FAQ() {

  const [selected, setSelected] = useState(null)
  const [isActive, setIsActive] = useState(true);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <section className="faq-section">
      <Container>
        <Row>
          <Col>
            <div className="faq-header">
              <h2 className="faq-header-title">FAQ</h2>
              <h3 className="faq-header-title2">Frequently Asked Questions</h3>
              <p className="faq-header-text">Frequently Asked Questions About the Car Rental Booking Process on Our Website. Answers to Common Concerns and Inquiries.</p>
            </div>
            <div className="wrapper">
              <div className="accordion">
                {data.map((item, i) => (
                  <div className="item">
                    <div className="title" onClick={() => toggle(i)}>
                      <button className="question-title ">{item.question}<img src={Arrow} className="arrow-img"></img></button>

                    </div>
                    <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>
                  </div>
                ))}
              </div>

            </div>
            <div className="mini-coop-img-container"></div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

const data = [
  {
    question: '1. What is special about comparing rental car deals?',
    answer:
      'Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models, You can find car rental deals by researching online and comparing prices from different rental companies.'

  },
  {
    question: '2. How do I find the car rental deals?',
    answer:
      'You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.'

  },
  {
    question: '3. How do I find such low rental car prices?',
    answer:
      'Book in advance. Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies. Use websites like Kayak, Expedia, or Travelocity to comapre prices from multiple rental car companies. Look for discount codes and coupons. Search for discount codes and coupons that you can use to lowe the rental price. Renting from an off-airport location can sometimes result in lower prices.'

  }
]

export default FAQ;