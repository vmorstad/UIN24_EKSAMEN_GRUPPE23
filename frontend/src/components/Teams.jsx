import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {createClient} from '@sanity/client'
import '../styles/App.scss';

export const client = createClient({
    projectId: "2zyda5m8",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-03-07"
  })

export default function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    client.fetch('*[_type == "team"]').then(data => {
      setTeams(data);
      console.log('Pokemon data:', data);
    }).catch(err => {
      console.error('Feil ved henting av team:', err);
    });
  }, []);

  return (
    <>
      <h2>TEAMS</h2>
      <ul className='PokeCardStyle'>
        {teams.map((team, index) => (
          <Link to={`/teams/${team.slug.current}`} className='PokeCardLink' key={index}>
            <li className='teamContainer'>
              <h2 className='teamHeadline'>{team.title}</h2>
              <img src={team.image.asset._ref} alt={team.title} />
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}
