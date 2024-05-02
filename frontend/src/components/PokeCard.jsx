import React, { useState, useEffect } from 'react'
import '../styles/App.scss'

const PokeCard = ({ limit }) => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`)
      const data = await response.json()

      const modifiedData = data.results.map(pokemon => ({
        name: pokemon.name,
        id: pokemon.url.split('/').slice(-2, -1)[0],
        picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/').slice(-2, -1)[0]}.png`
      }))
      
      setPokemonData(modifiedData)
    };

    fetchPokemon()
  }, [limit])

  return (
    <>
    <h2>MAIN POKEMONS</h2>
    <ul className="PokeCardStyle">
      {pokemonData.map(pokemon => (
        <li key={pokemon.id}>
          <img src={pokemon.picture} alt={pokemon.name} />
          <h3>{pokemon.name}</h3>
          <p>#{pokemon.id}</p>
        </li>
      ))}
    </ul>
    </>
  )
}

export default PokeCard
