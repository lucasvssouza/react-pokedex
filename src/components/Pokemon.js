import React from "react";
import height from "../image/height-icon.png";
import weight from "../image/weight-icon.png";
import pokeball from "../image/pokeball.png";

const Pokemon = (props) => {
  const { key, pokemon, details, pokemonDetails } = props;

  const detailPokemon = () => {
    pokemonDetails(pokemon.name);
  };

  const RenderPokemon = () => {
    if (details === true) {
      return (
        <div className="pokemon-details" key={key}>
          <img className="pd-img" src={pokemon.sprites.front_default} />
          <div className="pd-info">
            <div className="pd-type">
              {pokemon.types.map((type, index) => {
                return (
                  <div className={"type " + type.type.name} key={index}>
                    {type.type.name.charAt(0).toUpperCase() +
                      type.type.name.slice(1)}
                  </div>
                );
              })}
            </div>
            <div className="pd-ability">
              {pokemon.abilities.map((abilities, index) => {
                return (
                  <div className="ability" key={index}>
                      {abilities.ability.name.charAt(0).toUpperCase() +
                        abilities.ability.name.slice(1)}
                  </div>
                );
              })}
            </div>
            <div className="pd-s-item">
              <img className="pd-id-img" src={weight} />
              {pokemon.weight / 10} kg
            </div>
            <div className="pd-stats">
              <div className="pd-s-item">
                <img className="pd-img-height " src={height} />
                {pokemon.height / 10}m
              </div>
              <div className="pd-s-item">
                <img className="pd-id-img" src={pokeball} />
                <div>#{pokemon.id}</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (details === false) {
      return (
        <div className="pokemon-card" key={key} onClick={detailPokemon}>
          <img className="pc-img" src={pokemon.sprites.front_default} />
          <div className="pc-info">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            <div className="pc-type">
              {pokemon.types.map((type, index) => {
                return (
                  <div className={"type " + type.type.name} key={index}>
                    {type.type.name.charAt(0).toUpperCase() +
                      type.type.name.slice(1)}
                  </div>
                );
              })}
            </div>
            <div className="pc-id">
              <img className="pc-id-img" src={pokeball} />
              <div>#{pokemon.id}</div>
            </div>
          </div>
        </div>
      );
    }
  };

  return <RenderPokemon />;
};

export default Pokemon;
