import React from "react";
import { Link } from "react-router-dom"; 
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import "./NotFound.css";

const NotFound = () => {
  return (
  <div>
      <Banner />
      <Error />
      <Footer />
      </div>
  );
};
const Error = () => {
  return(
    <div className="containerError"> 
    <h1>404</h1>
    <p>Oups ! La page que vous demandez n'existe pas.</p>
    <Link to="/">Retour à la page d'accueil</Link>      
    </div>
  )
}

export default NotFound;
