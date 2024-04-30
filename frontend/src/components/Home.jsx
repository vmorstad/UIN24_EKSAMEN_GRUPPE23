import React from 'react';
import PokeCard from './PokeCard'; 
import TypeCard from './TypeCard'; 

export default function Home() {

  return (
    <>
    <PokeCard limit={9} />
    <TypeCard />
    </>
  );
}
