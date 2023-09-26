import React from "react";
import './Home.css'
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import Intro from "../../components/Intro/Intro";


const Home = () => {
  return (
    <div>
      <Banner />
      <Intro />
      <Card />
      <h1>home</h1>
      <Footer />
    </div>
  );
};

export default Home;
