import React from "react";
import "./App.css";
import Nav from "../../src/components/Nav/Nav";
import Cards from "../../src/components/Cards/Cards";
import Ciudad from "../../src/components/Ciudad/Ciudad";
import Contact from "../../src/components/Contact/Contact";
import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          console.log(recurso.main);
          const ciudad = {
            min: Math.round(recurso.main.temp_min - 276.15),
            max: Math.round(recurso.main.temp_max - 278.15),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: Math.round(recurso.main.temp - 273.15),
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          console.log(cities);
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" render={() => <Nav onSearch={onSearch} />} />
        <Route
          exact
          path="/ciudad/:ciudadId"
          render={({ match }) => (
            <Ciudad city={onFilter(match.params.ciudadId)} />
          )}
        />
        <Route
          exact
          path="/"
          render={() => <Cards cities={cities} onClose={onClose} />}
        />
        <Route exact path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
}

export default App;
