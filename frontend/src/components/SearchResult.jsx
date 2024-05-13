import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function fetchPokemonData(pokemonName, setSearchResult) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Det du søker etter finnes ikke')
        }
        return response.json()
      })
      .then(data => {
        setSearchResult(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
        setSearchResult('not-found')
      })
  }
  

function renderSearchResult(searchResult) {
  if (searchResult === 'not-found') {
    return <p>Det du søker etter finnes ikke</p>
  }

  return (
    <>
      {searchResult && (
        <ul className="PokeCardStyle">
        <Link to={`/pokemons/${searchResult.name}`} className='PokeCardLink' key={searchResult.id}>
          <li>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${searchResult.id}.png`} alt={searchResult.name} />
            <h3>{searchResult.name}</h3>
            <p>#{searchResult.id}</p>
          </li>
        </Link>
        </ul>
      )}
    </>
  )
}



export default function SearchResult() {
  const { pokemon } = useParams();
  const [searchResult, setSearchResult] = useState(null)

  useEffect(() => {
    if (pokemon) {
      fetchPokemonData(pokemon, setSearchResult)
    }
  }, [pokemon])

  return (
    <div>
      <h1>Search Result for {pokemon}</h1>
      {renderSearchResult(searchResult, pokemon)}
    </div>
  )
}


