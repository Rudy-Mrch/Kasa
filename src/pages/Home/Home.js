import React from "react";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Intro from "../../components/Intro/Intro";
import CardList from "../../components/CardList/CardList";



const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Intro />
      <CardList />
      <Footer />
    </div>
  );
};

export default Home;
