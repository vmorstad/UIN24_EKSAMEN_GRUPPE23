import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/App.scss'

const Type = () => {
  const { type } = useParams()
    const [pokemonData, setPokemonData] = useState([])
    const [typeName, setTypeName] = useState('')
    const [typeImage, setTypeImage] = useState('')
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
        const data = await response.json()
        
        const modifiedData = data.pokemon.map(pokemon => ({ //henter ut navn, id og png av pokemon med samme type
          name: pokemon.pokemon.name,
          id: pokemon.pokemon.url.split('/').slice(-2, -1)[0],
          picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokemon.url.split('/').slice(-2, -1)[0]}.png`
        }))
  
        setPokemonData(modifiedData)
        setTypeName(data.name)
        setTypeImage(data.name === 'poison' ? //henter ut png for type
        `https://raw.githubusercontent.com/ackarlse/UIN24_eksamen/master/ressurser/type%20symboler/poisen.png` :
        `https://raw.githubusercontent.com/ackarlse/UIN24_eksamen/master/ressurser/type%20symboler/${data.name}.png`) //henter type bilde
      }
  
      fetchData()
    }, [type])

  return (
    <>
      <h2 className='typeHeadline'><img src={typeImage} alt={typeName}/>{typeName.toUpperCase()}</h2>
      <ul className='PokeCardStyle'>
        {pokemonData.map(pokemon => (
          <li className={type} key={pokemon.id}>
            <img src={pokemon.picture} alt={pokemon.name} />
            <h3>{pokemon.name}</h3>
            <p>#{pokemon.id}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Type
