import React from "react";

const PokemonCount = ({count}) => {
  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <p>Pokemons:{count}</p>
    </div>
  );
};

export default PokemonCount;
