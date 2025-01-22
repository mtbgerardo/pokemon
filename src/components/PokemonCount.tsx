import React, { useState } from "react";

const PokemonCount = ({count, search}) => {
  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <p>{search.length !== 0 ? `Pokemons in Search: ${count}` : `Pokemons: ${count}`}</p>
    </div>
  );
};

export default PokemonCount;
