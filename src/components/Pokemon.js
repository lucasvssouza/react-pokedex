import React from "react";
import pokeball from "../image/pokeball.png";

const Pokemon = (props) => {
  const { key, pokemon } = props;
  return (
    <div className="pokemon-card" key={key}>
      <img className="pokemon-img" src={pokemon.sprites.front_default} />
      <div className="pokemon-info">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        <div className="pokemon-type">
          {pokemon.types.map((type, index) => {
            return (
              <div className={"type " + type.type.name} key={index}>
                {type.type.name.charAt(0).toUpperCase() +
                  type.type.name.slice(1)}
              </div>
            );
          })}
        </div>
        <div className="pokemon-id">
          <img className="pokemon-id-img" src={pokeball} />
          <div>#{pokemon.id}</div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
