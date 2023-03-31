import { Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from './Main';
import Rental from './Rental';
import ThreeBubbles from "./Rental";
import Models from "./models";
import BreakPoint from "./breakpoint";
import Package from "./package";
import Reviews from "./reviews";
import FAQ from "./faq";
import AppStore from "./mobile-app";
import Footer from "./footer";

export const Home = () => {
  return (
    <div>
      <MainPage />
      {/* <Rental /> */}
      <ThreeBubbles />
      <Models />
      <BreakPoint />
      <Package />
      <Reviews />
      <FAQ />
      <AppStore />
      <Footer />
    </div>
  )
}

export default Home;