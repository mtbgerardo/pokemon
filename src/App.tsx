import React, { useState } from "react";
import usePokemons from "./components/UsePokemons";
import PokemonCount from "./components/PokemonCount";
import PokemonCards from "./components/PokemonCards";
import PokemonsNav from "./components/PokemonsNav";
import "./App.css";

function App() {
  const data = usePokemons();

  return (
    <main>
      <PokemonCount count={data.count} />
      <PokemonCards pokemons={data.pokemons} />
      <PokemonsNav
        goNext={data.nextURL ? data.goNext : null}
        goPrev={data.prevURL ? data.goPrev : null}
      />
    </main>
  );
}

export default App;
