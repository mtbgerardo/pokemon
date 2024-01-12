import React, { useState } from "react";
import pokemonId from "./PokemonId";

const PokemonsCard = ({ pokemonsFilter }) => {
  return (
    <>
      <div className="pokemons">
        {pokemonsFilter.map((pokemon, index) => (
          <div id={`pokemon-${index}`} key={index} className="pokemonCard">
            <div className="pokemonImg">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId(
                  pokemon.url
                )}.png`}
                alt={pokemon.name}
              />
            </div>
            <div className="pokemonName">
              <p>{pokemon.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PokemonsCard;
