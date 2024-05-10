import './styles/App.scss'
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Layout from '../src/components/Layout';
import Home from './components/Home';
import Teams from './components/Teams';
import Team from './components/Team';
import Type from './components/Type';
import Pokemon from './components/Pokemon';


function App() {
  return (
    <>
    <Layout/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/teams" element={<Teams/>}/>
        <Route path="/team" element={<Team limit={3}/>}/>
        <Route path="/:type" element={<Type />} />
        <Route path="/pokemon" element={<Pokemon id={145}/>}/>
      </Routes>
    </>
  );
}

export default App;
