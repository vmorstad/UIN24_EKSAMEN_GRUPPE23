import './styles/App.scss'
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Layout from '../src/components/Layout';
import Home from './components/Home';
import Teams from './components/Teams';
import Team from './components/Team';
import Type from './components/Type';
import Pokemon from './components/Pokemon';
import SearchResult from './components/SearchResult';


function App() {
  return (
    <>
    <Layout/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/teams" element={<Teams/>}/>
        <Route path="/teams/:team" element={<Team limit={3}/>}/>
        <Route path="/:type" element={<Type />} />
        <Route path="/pokemons/:pokemon" element={<Pokemon />}/>
        <Route path="/searchresults/:pokemon" element={<SearchResult />} /> 
      </Routes>
    </>
  );
}

export default App;
