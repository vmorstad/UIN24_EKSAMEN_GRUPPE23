
import './styles/App.scss'
import React from 'react';
import Layout from '../src/components/Layout';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Layout />
      <Home />
    </div>
  );
}

export default App;
