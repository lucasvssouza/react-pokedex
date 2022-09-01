import React from "react";
import { useState } from "react";
import search from "../image/search_button.png";

const Searchbar = (props) => {
  const { onSearchHandler } = props;
  const [getSearch, setSearch] = useState("");
  const [getPokemon, setPokemon] = useState();

  const searchInput = (event) => {
    setSearch(event.target.value);
  };

  const searchKey = (event) => {
    if (event.key === "Enter") {
      searchButton();
    }
  };

  const searchButton = () => {
    onSearchHandler(getSearch);
  };

  return (
    <div className="sb-container">
      <input
        className="sb-input"
        placeholder="Pesquisar Pokémon..."
        onChange={searchInput}
        onKeyDown={searchKey}
      ></input>
      <button className="sb-button" onClick={searchButton}>
        <img src={search} />
      </button>
      {getPokemon ? (
        <div>
          <div>
            Nome:{" "}
            {getPokemon.name.charAt(0).toUpperCase() + getPokemon.name.slice(1)}
          </div>
          <div></div>
          <div>{getPokemon.id}</div>
          <img src={getPokemon.sprites.front_default} alt={getPokemon.name} />
        </div>
      ) : null}
    </div>
  );
};

export default Searchbar;
