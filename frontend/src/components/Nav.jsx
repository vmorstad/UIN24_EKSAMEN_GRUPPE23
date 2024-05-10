import React from 'react';

export default function Nav() {
  const handleClickButton1 = () => {
    window.location.href = '/';
  };
  const handleClickButton2 = () => {
    window.location.href = '/teams';
  };

  return (
    <nav className="NavContainer">
      <li>
        <button onClick={handleClickButton1} className="pokedex-button"><img src="gaming.png" alt="UIN POKEDEX" span className="UIN POKEDEX"/> UIN POKEDEX</button>
        <button onClick={handleClickButton2} className="pokedex-button"><span className="TEAMS">TEAMS</span></button>  
      </li>

      {/* Falsk søkefelt */}
      <input type="text" placeholder="Søk..." />
    </nav>
  );
}

{/*
//ikke fungereden knapp//
  <input type="search" placeholder="Søk..." />
  <button type="submit" className="search-button"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></button>
*/}