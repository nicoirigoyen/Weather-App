import React from "react";
import "./Ciudad.css";

export default function Ciudad({ city, img }) {
  return (
    <div className="ciudad">

      <div className="container">
        <h2 className="titleCardDetail">{city.name}</h2>
        <div className="info">
          <div className="itemsInfo">Temperatura: {city.temp} ºC</div>
          <div className="itemsInfo">Clima: {city.weather}</div>
          <div className="itemsInfo">Viento: {city.wind} km/h</div>
          <div className="itemsInfo">Cantidad de nubes: {city.clouds}</div>
          <div className="itemsInfo">Latitud: {city.latitud}º</div>
          <div className="itemsInfo">Longitud: {city.longitud}º</div>
        </div>
      </div>
    </div>
  );
}
