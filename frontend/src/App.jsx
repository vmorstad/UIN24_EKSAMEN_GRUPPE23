
import './styles/App.scss'
import React from 'react';
import TypeCard from '../src/components/TypeCard';
import PokeCard from './components/PokeCard';

function App() {
  return (
    <div className="App">
      <h1>Pokémon Types</h1>
      <PokeCard /> // her legger vi inn classname for styling 
      <TypeCard /> 
    </div>
  );
}

export default App;
