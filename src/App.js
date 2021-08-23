import React from 'react';
import './App.css';
import Postcards from './components/Postcards'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';

function App() {
  return (
      <main className="App">
        <Navbar />
        <Header />
        <Banner />
        <Postcards />
      </main>
  );
}

export default App;
