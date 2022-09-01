import React from "react";
import Pokemon from "./Pokemon";

const PokemonList = (props) => {
  const { search, pokemons, loading } = props;

  const Render = () => {
    if (pokemons === undefined) {
      return <div className="alert-msg">Pokémon não encontrado!!!</div>;
    } else {
      return (
        <div className="pokedex-grid">
          {pokemons.map((pokemon, index) => {
            return <Pokemon key={index} pokemon={pokemon} />;
          })}
        </div>
      );
    }
  };

  return (
    <div>
      {loading || search ? (
        <div className="alert-msg">Carregando aguarde...</div>
      ) : (
        <Render />
      )}
    </div>
  );
};

export default PokemonList;
