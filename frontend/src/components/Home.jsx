import React from 'react'
import PokeCard from './PokeCard'
import TypeCard from './TypeCard'
import Type from './Type'
import Pokemon from './Pokemon';

export default function Home() {

  return (
    <>
    <PokeCard limit={9} />
    <TypeCard />
    <Pokemon id={145}/>
    <Type type={4}/> {/* 1 = normal, 2 = fighting */}
    </>
  );
}
