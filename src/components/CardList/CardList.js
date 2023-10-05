import React from "react";
import data from "../../data.json";
import "./CardList.css";
import { Navigate, useNavigate } from "react-router-dom";

const CardList = () => {
  const navigate = useNavigate();
  const goToCard = (id) => {
    navigate("/card/" + id);
  };
  return (
    <main className="cards">
      {data.map((item) => (
        <div onClick={() => goToCard(item.id)} className="card" key={item.id}>
          <img src={item.cover} alt={`Cover ${item.id}`} />
          <p>{item.title}</p>
        </div>
      ))}
    </main>
  );
};

export default CardList;
