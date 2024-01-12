import React from 'react'

export default function PokemonSearch({ pokemonFilter, search }) {

  const onChangeSearch = (event) => {
    pokemonFilter(event.target.value)
  } 

  return (
    <>
    <form>
      <input
        type="text"
        id="search"
        value={search}
        onChange={onChangeSearch}
        placeholder="Search"
      />
    </form>
  </>
  )
}
