import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../styles/App.scss'

export default function Type() {
  const { type } = useParams()
  const [pokemonData, setPokemonData] = useState([])
  const [typeName, setTypeName] = useState('')
  const [typeImage, setTypeImage] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
        const data = await response.json()

        const modifiedData = data.pokemon.map(pokemon => ({
          name: pokemon.pokemon.name,
          id: pokemon.pokemon.url.split('/').slice(-2, -1)[0],
          picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokemon.url.split('/').slice(-2, -1)[0]}.png`
        }));

        setPokemonData(modifiedData)
        setTypeName(data.name)
        setTypeImage(data.name === 'poison' ?
          `https://raw.githubusercontent.com/ackarlse/UIN24_eksamen/master/ressurser/type%20symboler/poisen.png` :
          `https://raw.githubusercontent.com/ackarlse/UIN24_eksamen/master/ressurser/type%20symboler/${data.name}.png`)
      } catch (error) {
        console.error('Error fetching type data:', error)
      }
    };

    fetchData()
  }, [type])

  return (
    <>
      <h2 className='typeHeadline'><img src={typeImage} alt={typeName}/>{typeName.toUpperCase()}</h2>
      <ul className='PokeCardStyle'>
        {pokemonData.map(pokemon => (
          <Link to={`/pokemons/${pokemon.name}`} className='PokeCardLink' key={pokemon.id}>
            <li className={type} key={pokemon.id}>
              <img src={pokemon.picture} alt={pokemon.name} />
              <h3>{pokemon.name}</h3>
              <p>#{pokemon.id}</p>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
