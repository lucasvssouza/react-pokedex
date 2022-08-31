import React from "react";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const logoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div className="navbar">
        <img className="navbar-logo" alt="PokéAPI" src={logoImg} />
        <h1>Pokédex</h1>
      </div>
    </nav>
  );
};

export default Navbar;
