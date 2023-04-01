import { Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Star from '../assets/img/staricon.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import AudiA1Model from '../assets/img/audia1modelimg.png'
import ModelsCarIcon from '../assets/img/modelscaricon.svg'

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
                        <div className='models-div-star__icon'>
                          <img className='star-icon' src={Star}></img>
                          <img className='star-icon' src={Star}></img>
                          <img className='star-icon' src={Star}></img>
                          <img className='star-icon' src={Star}></img>
                          <img className='star-icon' src={Star}></img>
                        </div>
                      </div>
                      <div className='models-div__box__descr__name-price__price'>
                        <h4>$45</h4>
                        <p>per day</p>
                      </div>
                    </div>
                    <div className='models-div__box__descr__name-price__details'>
                      <div>
                        <div className="model-div__descr__box">
                          <img className='models-car-icon' src={ModelsCarIcon}></img>
                          <p className='models-descr-text'>Audi</p>
                        </div>
                        <div className="model-div__descr__box">
                          <img className='models-car-icon' src={ModelsCarIcon}></img>
                          <p className='models-descr-text'>Manual</p>
                        </div>
                      </div>
                      <div>
                        <div className="model-div__descr__box">
                          <p className='models-descr-text'>4/5</p>
                          <img className='models-car-icon' src={ModelsCarIcon}></img>

                        </div>
                        <div className="model-div__descr__box">
                          <p className='models-descr-text'>Diesel</p>
                          <img className='models-car-icon' src={ModelsCarIcon}></img>
                        </div>
                      </div>
                    </div>
                    <div className='models-div__box__descr__name-price__btn'>
                      <a href="/home">Book Rides</a>
                    </div>
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