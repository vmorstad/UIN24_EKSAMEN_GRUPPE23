import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
  };

  const handleSearchSubmit = () => {
    if (searchTerm.trim() !== '') {
      window.location.href = `/searchresults/${searchTerm}`
    }
  };

  return (
    <nav className="NavContainer">
      <li>
        <button className="pokedex-button">
          <img src="gaming.png" alt="UIN POKEDEX" className="UIN POKEDEX" />
          <Link to="/">UIN POKEDEX</Link>
        </button>
        <button className="pokedex-button TEAMS">
          <Link to="/teams">TEAMS</Link>
        </button>
      </li>

      <input
        type="text"
        placeholder="Søk..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearchSubmit} className="search-button">
        Søk
      </button>
    </nav>
  )
}
