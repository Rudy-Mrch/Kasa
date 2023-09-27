import React from "react";
import { NavLink } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Intro from "../../components/Intro/Intro";
import Collapse from "../../components/Collapse/Collapse";
import './About.css';


const About = () => {
  return (
    <div>
      <Banner />
      <Intro />
      <div className="container-about">
      <Collapse 
      isOpenByDefault={true}
      title="Fiabilité"
      text={
        <p>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </p>
      }
      icon={<img src="./pictures/arrow.png" alt="fleche" />}
    />
    <Collapse 
     isOpenByDefault={false}
     title="Respect"
     text={
       <p>
         La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
         comportement discriminatoire ou de perturbation du voisinage
         entraînera une exclusion de notre plateforme.
       </p>
     }
     icon={<img src="./pictures/arrow.png" alt="fleche" />}
   />
     <Collapse
        isOpenByDefault={false}
        title="Service"
        text={
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        }
        icon={<img src="./pictures/arrow.png" alt="fleche" />}
      />
          <Collapse
        isOpenByDefault={false}
        title="Sécurité"
        text={
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        }
        icon={<img src="./pictures/arrow.png" alt="fleche" />}
      />
</div>
      <Footer />
    </div>
  );
};

export default About;

