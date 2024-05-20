import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { createClient } from '@sanity/client';
import '../styles/App.scss';

export const client = createClient({
  projectId: "2zyda5m8",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07"
})

export default function Team() {
  const { team } = useParams();
  const [teamName, setTeamName] = useState(null);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const data = await client.fetch(`*[_type == "team" && slug.current == "${team}"][0]`);
        console.log('Team data:', data); // Logg teamdataen som ble hentet fra Sanity
        setTeamName(data);
      } catch (error) {
        console.error('Feil ved henting av team:', error);
      }
    };

    const fetchPokemon = async () => {
      try {
        const data = await client.fetch('*[_type == "pokemon"]');
        console.log('Pokemon data:', data); // Logg Pokemon-dataen som ble hentet fra Sanity
        setPokemonData(data);
      } catch (error) {
        console.error('Feil ved henting av Pokemon:', error);
      }
    };

    fetchTeam();
    fetchPokemon();
  }, [team]);

  return (
    <>
      {teamName && (
        <>
          <h2>{teamName.title}</h2>
          <ul className="PokeCardStyle">
            {pokemonData.map(pokemon => (
              <li key={pokemon._id}>
                {pokemon.teamName && pokemon.teamName.slug.current === teamSlug && (
                  <Link to={`/pokemons/${pokemon.slug.current}`} className='PokeCardLink'>
                    <img src={pokemon.image.asset.url} alt={pokemon.title} />
                    <h3>{pokemon.title}</h3>
                    <p>#{pokemon.id}</p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
