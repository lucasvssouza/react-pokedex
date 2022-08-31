import React from "react";
import Pokemon from "./Pokemon";

const PokemonList = (props) => {
  const { search, pokemons, loading } = props;

  var render;

  if (pokemons === undefined) {
    render = <div>Olá 1 </div>;
  } else {
   
  }

  return (
    <div>
      <div className="pokedex-header">{render}</div>
      {loading && search ? <div>Carregando...</div> : null}
      {(() => {
        if (pokemons === undefined) {
          return { render };
        } else {
          return (<div className="pokedex-grid">
          {pokemons.map((pokemon, index) => {
            return <Pokemon key={index} pokemon={pokemon} />;
          })}
        </div>);
        }
      })()}
    </div>
  );
};

export default PokemonList;
