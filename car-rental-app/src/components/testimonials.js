
import React from 'react';
import { Container, Row, Col, Nav } from "react-bootstrap";
import Footer from "./footer";
import BookBanner from "./bookbanner";
import Reviews from './reviews';
import NavBar from './Nav';


export const Testimonials = () => {
  return (
    <section>
      <NavBar />
      <section className="hero-pages">
        <div className="hero-pages__overlay"></div>
        <Container>
          <div className="hero-pages__text">
            <h3>Testimonials</h3>
            <p>Home / Testimonials</p>
          </div>
        </Container>
      </section>
      <Reviews />
      <BookBanner />
      <Footer />
    </section>
  )
}

export default Testimonials;