import { Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AudiA1Model from '../assets/img/audia1modelimg.png'

export const VehicleModels = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col>
            <div className='models-div'>
              <div className='models-div__box'>
                <div className='models-div__box__img'>
                  <img src={AudiA1Model}></img>
                  <div className='models-div__box__descr'>
                    <div className='models-div__box__descr__name-price'>
                      <div className='models-div__box__descr__name-price__name'>
                        <p>Audi A1</p>
                        <span></span>
                      </div>
                    </div>
                    <div className='models-div__box__descr__name-price__details'></div>
                    <div className='models-div__box__descr__name-price__btn'></div>
                  </div>
                </div>

              </div>
              <div></div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default VehicleModels;