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
    </div>
  );
};

export default Searchbar;
