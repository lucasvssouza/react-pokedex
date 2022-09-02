import React from "react";
import Pokemon from "./Pokemon";

const PokemonList = (props) => {
  const { search, loading, details, pokemons, pokemonDetails } = props;

  const RenderList = () => {
    if (pokemons === undefined) {
      return <div className="alert-msg">Pokémon não encontrado!!!</div>;
    } else {
      if (details === true) {
        return (
          <div className="pokedex-details">
            {pokemons.map((pokemon, index) => {
              return (
                <Pokemon
                  pokemonDetails={pokemonDetails}
                  details={details}
                  key={index}
                  pokemon={pokemon}
                />
              );
            })}
          </div>
        );
      }
      if (details === false) {
        return (
          <div className="pokedex-grid">
            {pokemons.map((pokemon, index) => {
              return (
                <Pokemon
                  pokemonDetails={pokemonDetails}
                  details={details}
                  key={index}
                  pokemon={pokemon}
                />
              );
            })}
          </div>
        );
      }
    }
  };

  return (
    <div>
      {loading || search ? (
        <div className="alert-msg">Carregando aguarde...</div>
      ) : (
        <RenderList />
      )}
    </div>
  );
};

export default PokemonList;
