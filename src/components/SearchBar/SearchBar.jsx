import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}
    >
      <div className="containerSearch">
        <input
          type="text"
          className="inputSearch"
          placeholder="City.."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="searchButton" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}
