import { Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Star from '../assets/img/staricon.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import AudiA1Model from '../assets/img/audia1modelimg.png'
import GolfModel from '../assets/img/golf6modelimg.png'
import ToyotaModel from '../assets/img/toyotamodelimg.png'
import BmwModel from '../assets/img/bmw320modelimg.png'
import MercedesModel from '../assets/img/mercedesmodelimg.png'
import PassatModel from '../assets/img/passatmodelimg.png'
import ModelsCarIcon from '../assets/img/modelscaricon.svg'
import BookBanner from './bookbanner';
import Footer from './footer';

export const VehicleModels = () => {
  return (
    <section className='models-section-wrapper'>
      <section className="hero-pages">
        <div className="hero-pages__overlay"></div>
        <Container>
          <div className="hero-pages__text">
            <h3>Vehicle Models</h3>
            <p>Home / Vehicle Models</p>
          </div>
        </Container>
      </section>
      <Container>
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
          <div className='models-div__box'>
            <div className='models-div__box__img'>
              <img src={GolfModel}></img>
              <div className='models-div__box__descr'>
                <div className='models-div__box__descr__name-price'>
                  <div className='models-div__box__descr__name-price__name'>
                    <p>Golf 6</p>
                    <div className='models-div-star__icon'>
                      <img className='star-icon' src={Star}></img>
                      <img className='star-icon' src={Star}></img>
                      <img className='star-icon' src={Star}></img>
                      <img className='star-icon' src={Star}></img>
                      <img className='star-icon' src={Star}></img>
                    </div>
                  </div>
                  <div className='models-div__box__descr__name-price__price'>
                    <h4>$37</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className='models-div__box__descr__name-price__details'>
                  <div>
                    <div className="model-div__descr__box">
                      <img className='models-car-icon' src={ModelsCarIcon}></img>
                      <p className='models-descr-text'>VW</p>
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
          <div className='models-div__box'>
            <div className='models-div__box__img'>
              <img src={ToyotaModel}></img>
              <div className='models-div__box__descr'>
                <div className='models-div__box__descr__name-price'>
                  <div className='models-div__box__descr__name-price__name'>
                    <p>Toyota</p>
                    <div className='models-div-star__icon'>
                      <img className='star-icon' src={Star}></img>
                      <img className='star-icon' src={Star}></img>
                      <img className='star-icon' src={Star}></img>
                      <img className='star-icon' src={Star}></img>
                      <img className='star-icon' src={Star}></img>
                    </div>
                  </div>
                  <div className='models-div__box__descr__name-price__price'>
                    <h4>$30</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className='models-div__box__descr__name-price__details'>
                  <div>
                    <div className="model-div__descr__box">
                      <img className='models-car-icon' src={ModelsCarIcon}></img>
                      <p className='models-descr-text'>Camry</p>
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
          <div className='models-div__box'>
            <div className='models-div__box__img'>
              <img src={BmwModel}></img>
              <div className='models-div__box__descr'>
                <div className='models-div__box__descr__name-price'>
                  <div className='models-div__box__descr__name-price__name'>
                    <p>BMW 320</p>
                    <div className='models-div-star__icon'>
                      <img className='star-icon' src={Star}></img>
                      <img className='star-icon' src={Star}></img>
                      <img className='star-icon' src={Star}></img>
                      <img className='star-icon' src={Star}></img>
                      <img className='star-icon' src={Star}></img>
                    </div>
                  </div>
                  <div className='models-div__box__descr__name-price__price'>
                    <h4>$35</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className='models-div__box__descr__name-price__details'>
                  <div>
                    <div className="model-div__descr__box">
                      <img className='models-car-icon' src={ModelsCarIcon}></img>
                      <p className='models-descr-text'>Modern</p>
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
          <div className='models-div__box'>
            <div className='models-div__box__img'>
              <img src={MercedesModel}></img>
              <div className='models-div__box__descr'>
                <div className='models-div__box__descr__name-price'>
                  <div className='models-div__box__descr__name-price__name'>
                    <p>Mercedes</p>
                    <div className='models-div-star__icon'>
                      <img className='star-icon' src={Star}></img>
                      <img className='star-icon' src={Star}></img>
                      <img className='star-icon' src={Star}></img>
                      <img className='star-icon' src={Star}></img>
                      <img className='star-icon' src={Star}></img>
                    </div>
                  </div>
                  <div className='models-div__box__descr__name-price__price'>
                    <h4>$50</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className='models-div__box__descr__name-price__details'>
                  <div>
                    <div className="model-div__descr__box">
                      <img className='models-car-icon' src={ModelsCarIcon}></img>
                      <p className='models-descr-text'>Benz GlK</p>
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
          <div className='models-div__box'>
            <div className='models-div__box__img'>
              <img src={PassatModel}></img>
              <div className='models-div__box__descr'>
                <div className='models-div__box__descr__name-price'>
                  <div className='models-div__box__descr__name-price__name'>
                    <p>VW Passat</p>
                    <div className='models-div-star__icon'>
                      <img className='star-icon' src={Star}></img>
                      <img className='star-icon' src={Star}></img>
                      <img className='star-icon' src={Star}></img>
                      <img className='star-icon' src={Star}></img>
                      <img className='star-icon' src={Star}></img>
                    </div>
                  </div>
                  <div className='models-div__box__descr__name-price__price'>
                    <h4>$25</h4>
                    <p>per day</p>
                  </div>
                </div>
                <div className='models-div__box__descr__name-price__details'>
                  <div>
                    <div className="model-div__descr__box">
                      <img className='models-car-icon' src={ModelsCarIcon}></img>
                      <p className='models-descr-text'>CC</p>
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
      </Container>
      <BookBanner />
      <Footer />
    </section>

  )
}

export default VehicleModels;