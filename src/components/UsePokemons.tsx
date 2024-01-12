import React, { useEffect, useState } from "react";

type Pokemons = {
  name: string;
  url: string;
};

type Count = number | 0;
type Next = string;
type Previous = string;

export default function UsePokemons() {
  const [pokemons, setPokemons] = useState<Pokemons []>([]);
  const [count, setCount] = useState<Count>(0);
  const [nextURL, setNextURL] = useState<Next>("")
  const [prevURL, setPrevURL] = useState<Previous>("")  
  const [currentURL, setCurrentURL] = useState("https://pokeapi.co/api/v2/pokemon/")

  useEffect(() => {

    async function fetchData() {
      try {
        const res = await fetch(currentURL);
        const data = await res.json();

        setPokemons(data.results);
        setCount(data.count);
        setNextURL(data.next)
        setPrevURL(data.previous)
      
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchData();

  }, [currentURL]);

  const goNext = () => {
    setCurrentURL(nextURL)
  }

  const goPrev = () => {
    setCurrentURL(prevURL)
  }

  return {
    pokemons, 
    count, 
    goNext, 
    goPrev, 
    nextURL, 
    prevURL
  };
}

//"https://pokeapi.co/api/v2/pokemon/"
