const pokemonId = (url: string) => {
  let arr = url.split("/");
  return arr[6];
};

export default pokemonId;
