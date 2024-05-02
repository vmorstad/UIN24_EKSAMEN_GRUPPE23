
import './styles/App.scss'
import React from 'react';
import Layout from '../src/components/Layout';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Layout />
      <Home />
    </div>
  );
}

export default App;

    {/* 
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Layout> 
     */}
