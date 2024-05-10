import React from 'react';
import '../styles/App.scss';

export default function Teams() {
    const teams = [
        { name: 'Team Instinct', image: 'https://raw.githubusercontent.com/ackarlse/UIN24_eksamen/master/ressurser/teams/Team_Instinct.webp' },
        { name: 'Team Mystic', image: 'https://raw.githubusercontent.com/ackarlse/UIN24_eksamen/master/ressurser/teams/Team_Mystic.webp' },
        { name: 'Team Valor', image: 'https://raw.githubusercontent.com/ackarlse/UIN24_eksamen/master/ressurser/teams/Team_Valor.webp' }
    ];

    return (
        <>
            <h2>TEAMS</h2>
            <ul className='PokeCardStyle'>
            {teams.map((team, index) => (
                <li key={index} className='teamContainer'>
                <h2 className='teamHeadline'>{team.name}</h2>
                <img src={team.image} alt={team.name} />
            </li>
            ))}
            </ul>
        </>
    );
}
