import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Pokemon() {
  const [pokemonData, setPokemonData] = useState(null)
  const [abilitiesData, setAbilitiesData] = useState([])
  const { pokemon } = useParams()

  useEffect(() => {
    const fetchPokemonData = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const pokemonInfo = await response.json()
      
        const types = pokemonInfo.types.map(type => ({
          name: type.type.name,
          picture: type.type.name === 'poison' ?
            `https://raw.githubusercontent.com/ackarlse/UIN24_eksamen/master/ressurser/type%20symboler/poisen.png` :
            `https://raw.githubusercontent.com/ackarlse/UIN24_eksamen/master/ressurser/type%20symboler/${type.type.name}.png`
        }));
      
        const stats = pokemonInfo.stats.map(stat => ({
          name: stat.stat.name,
          value: stat.base_stat
        }));
      
        const abilitiesPromises = pokemonInfo.abilities.map(async ability => {
          const abilityResponse = await fetch(ability.ability.url)
          const abilityData = await abilityResponse.json()
          return {
            name: abilityData.name,
            effect: abilityData.effect_entries.find(entry => entry.language.name === 'en').effect,
            shortEffect: abilityData.effect_entries.find(entry => entry.language.name === 'en').short_effect
          };
        });  //*** Kilde 3 ***\\
        const abilities = await Promise.all(abilitiesPromises)
      
        setPokemonData({
          name: pokemonInfo.forms[0].name,
          picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonInfo.id}.png`,
          types,
          stats
        })
        setAbilitiesData(abilities)
      }
      

    fetchPokemonData()
  }, [pokemon])

  if (!pokemonData) {
    return <p>Loading...</p>
  }

  return (
    <>
      <div className='gridContainer'>
        <article className='pokemonStyle'>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.picture} alt={pokemonData.name} className={pokemonData.types[0].name} />
        </article>

        <article className='statSection'>
          <h2>TYPE(S)</h2>
          <ul className='TypeStyle'>
            {pokemonData.types.map((type, index) => (
              <li key={index} className={type.name}>
                <img src={type.picture} alt={type.name} />
                {type.name}
              </li>
            ))}
          </ul>

          <h2>STATS</h2>
          <ul className='statSectionTest'>
            {pokemonData.stats.map((stat, index) => (
              <li key={index}>
                <p>{stat.name}</p>
                <p>{stat.value}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <article className='ablitySection'>
        <h2>ABILITIES</h2>
        <ul>
          {abilitiesData.map((ability, index) => (
            <li key={index}>
              <strong>{ability.name}</strong>
              <p>Effect: {ability.effect}</p>
              <p>Short effect: {ability.shortEffect}</p>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
