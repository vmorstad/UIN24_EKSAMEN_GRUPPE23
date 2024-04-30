import React, { useState, useEffect } from 'react';

export default function PokeCard() {
  const [pokemonNames, setPokemonNames] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon-form/')
      .then(response => response.json())
      .then(data => {
        const names = data.results.map(pokemon => pokemon.name);
        setPokemonNames(names);
      })
  }, []);

  return (
  <>
  <h2>MAIN POKEMONS</h2>
  {pokemonNames.map((name, index) => (
  <p>{name}</p>
  ))}
  </>
  );
}
