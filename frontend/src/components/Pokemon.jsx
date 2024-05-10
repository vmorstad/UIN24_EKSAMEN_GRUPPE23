import React, { useState, useEffect } from 'react';

const Pokemon = ({ id }) => {
  const [pokemonData, setPokemonData] = useState(null)
  const [abilitiesData, setAbilitiesData] = useState([])

  useEffect(() => {
      const fetchPokemonData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const pokemon = await response.json()

      
      const types = pokemon.types.map(type => ({
        name: type.type.name,
        picture: type.type.name === 'poison' ? 
          `https://raw.githubusercontent.com/ackarlse/UIN24_eksamen/master/ressurser/type%20symboler/poisen.png` :
          `https://raw.githubusercontent.com/ackarlse/UIN24_eksamen/master/ressurser/type%20symboler/${type.type.name}.png`
      }));

      
      const stats = pokemon.stats.map(stat => ({
        name: stat.stat.name,
        value: stat.base_stat
      }));

      
      const abilitiesPromises = pokemon.abilities.map(async ability => {
        const abilityResponse = await fetch(ability.ability.url)
        const abilityData = await abilityResponse.json()
        return {
          name: abilityData.name,
          effect: abilityData.effect_entries.find(entry => entry.language.name === 'en').effect,
          shortEffect: abilityData.effect_entries.find(entry => entry.language.name === 'en').short_effect
        };
      });
      const abilities = await Promise.all(abilitiesPromises)

      setPokemonData({
        name: pokemon.forms[0].name,
        picture: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        types,
        stats
      });
      setAbilitiesData(abilities)
    };

    fetchPokemonData()
  }, [id])

  if (!pokemonData) {
    return <p>Loading...</p>
  }

  return (
    <>
    <div className='gridContainer'>
    <div className='pokemonStyle'>
      <h2>{pokemonData.name}</h2> {/** lag egen class til h2 og img og dropp div pokestyle */}
      <img src={pokemonData.picture} alt={pokemonData.name} className={pokemonData.types[0].name} />
    </div>
      
    <div className='statSection'>
      <h2>TYPE(S)</h2> {/** lag egen class til h2 og dropp div statsection, plaser hver tag i rigtig grid*/}
      <ul className='TypeStyle'>
        {pokemonData.types.map((type, index) => (
          <li key={index} className={type.name}>
            <img src={type.picture} alt={type.name}/>
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
    </div>
    </div>
    
    <div className='ablitySection'>
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
    </div>
    </>
  );
};

export default Pokemon;
