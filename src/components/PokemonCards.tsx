import React, { useState, useEffect } from "react";
import usePokemons from "./UsePokemons";
import PokemonCount from "./PokemonCount";
import PokemonsNav from "./PokemonsNav";
import PokemonSearch from "./PokemonSearch";
import PokemonsCard from "./PokemonsCard";

//search function the explain here
//https://www.freecodecamp.org/news/search-and-filter-component-in-reactjs/
export default function PokemonCards() {
  const [search, setSearch] = useState("");
  const [searchParam] = useState(["name"]);
  const data = usePokemons();

  const pokemonsFilter = () => {
    return data.pokemons.filter((pokemon) => {
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

  useEffect(() => {
    if(search !== "") data.setURL(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${data.count}`);
    return () => data.setURL(`https://pokeapi.co/api/v2/pokemon/`);
  },[search])


  return (
    <>
      <PokemonCount count={search !== "" ? pokemonsFilter().length : data.count} search={search} />
      <PokemonSearch pokemonFilter={pokemonFilter} search={search} />
      <PokemonsCard pokemonsFilter={pokemonsFilter()} />
      <PokemonsNav
        goNext={data.nextURL ? data.goNext : null}
        goPrev={data.prevURL ? data.goPrev : null}
      />
    </>
  );
}
