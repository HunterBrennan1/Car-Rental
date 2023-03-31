import { Container, Row, Col } from "react-bootstrap";
import React from 'react';
import Placeholder from '../assets/img/placeholder.png';
import AudiA1 from '../assets/img/audia1s.avif';
import { useState } from "react";


function Models() {

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <section className="model-section">
      <Container>
        <Row>
          <Col>
            <h2 className="model-view model-title">Vehicle Models</h2>
            <h3 className="model-view model-title2">Our rental fleet</h3>
            <p className="model-view model-text">Choose from a variety of our amazing vehicles to rent for your next adventure or buisiness trip</p>
            <div className="model-view-container">
              <div className="model-btn-container">
                <button className="model-btn active">Audi A1 S-Line</button>
                <button className="model-btn">VW Golf 6</button>
                <button className="model-btn">Toyota Camry</button>
                <button className="model-btn">BMW 320 ModernLine</button>
                <button className="model-btn">Mercedes-Benz GLK</button>
                <button className="model-btn">VW Passat CC</button>
              </div>
              <div className="model-img-container">
                <img src={AudiA1} className="model-img"></img>
              </div>
              <div className="model-info-container">
                <h2 className="table-header"><span className="table-header-span">$35</span> / rent per day</h2>
                <table className="model-info-table">
                  <tbody>
                    <tr>
                      <td className="model-table-cell model">Model</td>
                      <td className="model-table-cell">Placeholder</td>
                    </tr>
                    <tr>
                      <td className="model-table-cell make">Make</td>
                      <td className="model-table-cell">Placeholder</td>
                    </tr>
                    <tr>
                      <td className="model-table-cell year">Year</td>
                      <td className="model-table-cell">Placeholder</td>
                    </tr>
                    <tr>
                      <td className="model-table-cell doors">Doors</td>
                      <td className="model-table-cell">Placeholder</td>
                    </tr>
                    <tr>
                      <td className="model-table-cell ac">AC</td>
                      <td className="model-table-cell">Placeholder</td>
                    </tr>
                    <tr>
                      <td className="model-table-cell transmission">Transmission</td>
                      <td className="model-table-cell">Placeholder</td>
                    </tr>
                    <tr>
                      <td className="model-table-cell fuel">Fuel</td>
                      <td className="model-table-cell">Placeholder</td>
                    </tr>
                  </tbody>
                </table>
                <button className="table-button">RESERVE NOW</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}


const tabledata = [
  {
    car1: "Audi A1 S-Line",
    model: "model1",
    make: "make1",
    year: "year1",
    doors: "doors1",
    ac: "ac1",
    transmission: "trans1",
    fuel: "fuel1"
  },
  {
    car2: "VW Golf 6",
    model: "model2",
    make: "make2",
    year: "year2",
    doors: "doors2",
    ac: "ac2",
    transmission: "trans2",
    fuel: "fuel2"
  }
]

export default Models;