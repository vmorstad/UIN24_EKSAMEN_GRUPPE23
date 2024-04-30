import React, { useState, useEffect } from 'react';
import '../styles/App.scss'

const PokeCard = ({ limit }) => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon-form/')
      .then(response => response.json())
      .then(data => {
        const modifiedData = data.results.slice(0, limit).map(pokemon => ({
          name: pokemon.name,
          id: pokemon.url.split('/').slice(-2, -1)[0], // Henter id fra URL
          picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/').slice(-2, -1)[0]}.png` // Lager bilde-URL basert på id
        }))
        setPokemonData(modifiedData)
      })
  }, [limit])

  return (
    <>
    <h2>MAIN POKEMONS</h2>
    <div className="poke-container">
      {pokemonData.map(pokemon => (
        <div className="poke-card" key={pokemon.id}>
          <h3>Name: {pokemon.name}</h3>
          <p>ID: {pokemon.id}</p>
          <img src={pokemon.picture} alt={pokemon.name} />
        </div>
      ))}
    </div>
    </>
  );
}

export default PokeCard;
