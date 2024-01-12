import React, { useState } from "react";
import PokemonSearch from "./PokemonSearch";
import PokemonsCard from "./PokemonsCard";

//search function the explain here
//https://www.freecodecamp.org/news/search-and-filter-component-in-reactjs/
export default function PokemonCards({ pokemons }) {
  const [search, setSearch] = useState("");
  const [searchParam] = useState(["name"]);

  const pokemonsFilter = () => {
    return pokemons.filter((pokemon) => {
      return searchParam.some((newPokemon) => {
        return (
          pokemon[newPokemon]
            .toString()
            .toLowerCase()
            .indexOf(search.toLowerCase()) > -1
        );
      });
    });
  };

  const pokemonFilter = (name) => {
    setSearch(name);
  };

  return (
    <>
      <PokemonSearch pokemonFilter={pokemonFilter} search={search} />
      <PokemonsCard pokemonsFilter={pokemonsFilter()} />
    </>
  );
}
