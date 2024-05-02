import React from 'react'
import PokeCard from './PokeCard'
import TypeCard from './TypeCard'
import Type from './Type'

export default function Home() {

  return (
    <>
    <PokeCard limit={9} />
    <TypeCard />
    <Type type={2}/> {/* 1 = normal, 2 = fighting */}
    </>
  );
}
