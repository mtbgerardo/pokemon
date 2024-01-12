import React from "react";

export default function PokemonsNav({goNext, goPrev}) {
  return (
    <div>
      {goPrev && <button onClick={goPrev}>Prev</button>}
      {goNext && <button onClick={goNext}>Next</button>}
    </div>
  );
}
