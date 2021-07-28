import React from 'react';
import './App.css';
import Postcards from './components/Postcards'
import Header from './components/Header'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Postcards/>
    </div>
  );
}

export default App;
