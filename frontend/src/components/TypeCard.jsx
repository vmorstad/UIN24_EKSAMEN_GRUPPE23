import React, { useState, useEffect } from 'react'
import '../styles/colors.scss'

export default function TypeCard() {
  const [types, setTypes] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type/')
      .then(response => response.json())
      .then(data => {
        const typeNames = data.results.map(type => ({
          name: type.name,
          picture: type.name === 'poison' ? 
            `https://raw.githubusercontent.com/ackarlse/UIN24_eksamen/master/ressurser/type%20symboler/poisen.png` :
            `https://raw.githubusercontent.com/ackarlse/UIN24_eksamen/master/ressurser/type%20symboler/${type.name}.png`
        }));
        setTypes(typeNames)
      })
  }, [])

  return (
    <>
      <h3>TYPES</h3>
      <ul>
        {types.map(type => (
          <li className={type.name} key={type.name}>
            <img src={type.picture} alt={type.name} /> {type.name}
          </li>
        ))}
      </ul>
    </>
  );
}


