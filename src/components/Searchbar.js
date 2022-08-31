import React from "react";
import { useState } from "react";
import { searchPokemon } from "../api";

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

  function searchButton() {
    onSearchHandler(getSearch);
  }

  return (
    <div className="sb-container">
      <div className="sb-input">
        <input
          placeholder="Pesquisar Pokémon..."
          onChange={searchInput}
          onKeyDown={searchKey}
        ></input>
      </div>
      <div className="sb-button">
        <button onClick={searchButton}>A</button>
      </div>
      {getPokemon ? (
        <div>
          <div>Nome: {getPokemon.name.charAt(0).toUpperCase() + getPokemon.name.slice(1)}</div>
        <div></div>
          <div>{getPokemon.id}</div>
          <img src={getPokemon.sprites.front_default} alt={getPokemon.name} />
        </div>
      ) : null}
    </div>
  );
};

export default Searchbar;
