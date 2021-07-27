import React from "react";
import "./Cards.css";
import SearchBar from "../SearchBar/SearchBar.jsx";
import Card from "../Card/Card.jsx";

export default function Cards({ cities, onClose, onSearch }) {
  return (

    <div className="cards">
      <div className="containerSearch"><SearchBar onSearch={onSearch} /></div>
      <div className="containerMap">
      {cities.map((c) => (
        <Card
          key={c.index}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
          id={c.id}
        />
      ))}
      </div>
      
    </div>
  );
}
