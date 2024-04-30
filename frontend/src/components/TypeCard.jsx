import React, { useState, useEffect } from 'react'

export default function TypeCard() {
  const [types, setTypes] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type/')
      .then(response => response.json())
      .then(data => {
        const typeNames = data.results.map(type => type.name)
        setTypes(typeNames)
      })
  }, [])

  return (
    <>
      <h3>TYPES</h3>
      <ul>
        {types.map((type, index) => (
          <li key={index}>{type}</li>
        ))}
      </ul>
    </>
  );
}


