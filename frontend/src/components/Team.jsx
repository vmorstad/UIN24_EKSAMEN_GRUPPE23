import React, { useState, useEffect } from 'react';
import '../styles/App.scss';

export default function Team({ limit }) {
    const teams = [
        { name: 'Team Instinct'},
        { name: 'Team Mystic'},
        { name: 'Team Valor'}
    ]
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
    });

  return (
    <>
    <h4>POKEMONS</h4>
            {teams.map((team, index) => (
                <li key={index} className='teamContainer'>
                <h2 className='teamHeadline'>{team.name}</h2>
                </li>
        ))}
        
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
