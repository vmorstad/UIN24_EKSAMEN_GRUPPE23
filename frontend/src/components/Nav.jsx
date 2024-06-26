import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Nav() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
  };

//*** Kilde 1 ***\\
  const handleSearchSubmit = () => {
    if (searchTerm.trim() !== '') {
      window.location.href = `/searchresults/${searchTerm}`
    }
  };

  return (
    <nav className="NavContainer">
      <li>
        <button className="pokedex-button">
          <img src="/gaming.png" alt="UIN POKEDEX" className="UIN POKEDEX" />
          <Link className="NavLink" to="/" key="home">UIN POKEDEX</Link>
        </button>
        <button className="pokedex-button TEAMS">
          <Link className="NavLink" to="/teams" key="teams">TEAMS</Link>
        </button>
      </li>


      <div className="wrapper">
        <input
          type="text"
          placeholder="Søk etter pokemon"
          value={searchTerm}
          onChange={handleInputChange}
        />
      <button onClick={handleSearchSubmit} className="search-button">
        <img src="/magnifying-glass-solid.svg" alt="Search" className='SearchLogo'/>
      </button>
      </div>

    </nav>
  )
}
