import React from "react";
import { NavLink } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import DropDown from "../../components/DropDown/DropDown";
import Intro from "../../components/Intro/Intro";
import "font-awesome/css/font-awesome.min.css";
import './About.css'
 
const About = () => {
  return (
    <div>
      <Banner />
      <Intro />
      <div  className="listCard">
        <DropDown title="Sécurité" openLogo={<i className="fa fa-angle-down"></i>} closeLogo={<i className="fa fa-angle-up"></i>}>
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </DropDown>
        <DropDown title="Respect" openLogo={<i className="fa fa-angle-down"></i>} closeLogo={<i className="fa fa-angle-up"></i>}>
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </DropDown>
        <DropDown title="Service" openLogo={<i className="fa fa-angle-down"></i>} closeLogo={<i className="fa fa-angle-up"></i>}>
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </DropDown>
        <DropDown title="Sécurité" openLogo={<i className="fa fa-angle-down"></i>} closeLogo={<i className="fa fa-angle-up"></i>}>
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </DropDown>
      </div>
      <Footer />
    </div>
  );
};

export default About;
