import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/App.scss';

export default function Team({ limit }) {
  const { team } = useParams();
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
      const data = await response.json();

      const modifiedData = data.results.map(pokemon => ({
        name: pokemon.name,
        id: pokemon.url.split('/').slice(-2, -1)[0],
        picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/').slice(-2, -1)[0]}.png`
      }));

      setPokemonData(modifiedData);
    };

    fetchPokemon();
  }, [limit]);

  return (
    <>
      <h3>{team}</h3>
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
  );
}
