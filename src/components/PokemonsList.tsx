import React, { useState, useEffect, useRef } from "react";
import "../App.css";

interface Pokemons {
  url: string;
  name: string;
}

async function fetchPokemons(): Promise<Pokemons[]> {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await response.json();
  const pokemons = data.results;
  return pokemons;
}

const PokemonsList = () => {
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [searchParam] = useState(["name"]);

  const pokemonId = (url: string) => {
    let arr = url.split("/");
    return arr[6];
  };

  //excelent search function the explain here https://www.freecodecamp.org/news/search-and-filter-component-in-reactjs/
  const pokemonSearch = (pokemon) => {
    return pokemons.filter((pokemon) => {
        return searchParam.some((newPokemon) => {
            return (
              pokemon[newPokemon]
              .toString()
              .toLowerCase().
              indexOf(search.toLowerCase()) > -1
            );
        });
    })
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchPokemons();
        setPokemons(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
      if (loading) return <p>loading...</p>;
      if (error) return <p>{error}</p>;
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            id="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search"
          />
        </form>
      </div>
      <div className="pokemons">
        {pokemonSearch(pokemons).map((pokemon) => (
          <div
            id={pokemonId(pokemon.url)}
            key={pokemonId(pokemon.url)}
            className="pokemonCard"
          >
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

export default PokemonsList;
