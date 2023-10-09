import React, { useState } from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import data from "../../data.json";
import { useParams } from "react-router-dom";
import "./Logement.css";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Rating from "../../components/Rating/Rating";
import NotFound from "../NotFound/NotFound";

function Logement() {
  let { id } = useParams();
  const logement = data.find((loges) => loges.id === id);
  const title = logement ? logement.title : "";
  const location = logement ? logement.location : "";
  const tags = logement ? logement.tags : [];
  const collapseDescription = logement ? logement.description : "";
  const collapseEquipement = logement ? logement.equipments : "";
  const name = logement ? logement.host.name: "";
  const profilPicture = logement? logement.host.picture : "";
  const ratings = logement? logement.rating : "note";
    if(logement === undefined){
      return <NotFound />
  }
  return (
    <div className="logement-container">
      <Banner />
      <Carrousel slides={logement.pictures} />
      <div className="logement_description">
      <div className="title-container">
  <h1 className="title-logement">{title}</h1>
  <div className="name-container">
    <p className="name">{name}</p>
    <img className="profilePicture" src={profilPicture} alt="photo de profil" />
  </div>
</div>
        <h2 className="location">{location}</h2>
     <div className="notationTag">
        <ul className="tag">
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      <div className="nameStar">
       <Rating rating={ratings} />
       <div className="name-container_mobile">
    <p className="name">{name}</p>
    <img className="profilePicture" src={profilPicture} alt="photo de profil" />
    </div>
       </div>
       </div>
        <div className="collapses">
          <Collapse
            isOpenByDefault={false}
            title="Description"
            className="collapseDescription"
            text={
              <p>
                {collapseDescription}
              </p>
            }
            icon={<img src="/pictures/arrow.png" alt="fleche" />}
          />
          <Collapse
            isOpenByDefault={false}
            title="Équipements"
            className="collapseEquipment"
            text={
              <p className="equipments-list">
                {collapseEquipement.join("\n")}
              </p>
            }
            icon={<img src="/pictures/arrow.png" alt="fleche" />}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Logement;
