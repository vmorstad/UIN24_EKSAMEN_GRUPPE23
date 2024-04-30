import React from 'react';
import PokeCard from './PokeCard'; 
import TypeCard from './TypeCard'; 

export default function Home() {

  return (
    <>
        {/* Falske knapper */}
    <div>
        <button>Knapp 1</button>
        <button>Knapp 2</button>

        {/* Falsk søkefelt */}
        <input type="text" placeholder="Søk..." />
    </div>
    <PokeCard />
    <TypeCard />
    </>
  );
}
