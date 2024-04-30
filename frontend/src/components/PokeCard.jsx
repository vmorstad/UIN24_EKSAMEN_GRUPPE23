import React, { useState, useEffect } from 'react';

export default function PokeCard() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon-form/')
      .then(response => response.json())
      .then(data => {
        const modifiedData = data.results.map(pokemon => ({
          name: pokemon.name,
          id: pokemon.url.split('/').slice(-2, -1)[0], // Henter id fra URL
          picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/').slice(-2, -1)[0]}.png` // Lager bilde-URL basert på id
        }));
        setPokemonData(modifiedData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    <h2>MAIN POKEMONS</h2>
      {pokemonData.map(pokemon => (
        <div key={pokemon.id}>
          <h3>Name: {pokemon.name}</h3>
          <p>ID: {pokemon.id}</p>
          <img src={pokemon.picture} alt={pokemon.name} />
        </div>
      ))}
    </>
  );
}
