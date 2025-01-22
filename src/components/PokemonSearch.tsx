import React from 'react'

export default function PokemonSearch({ pokemonFilter, search }) {

  return (
    <>
    <form>
      <input
        type="text"
        id="search"
        value={search}
        onChange={e =>  pokemonFilter(e.target.value)}
        placeholder="Search"
      />
    </form>
  </>
  )
}
