import React from 'react';
import './App.css';
import Postcards from './components/Postcards'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <div>
        <h4>Recent Posts</h4>
      </div>
      <Postcards/>
    </div>
  );
}

export default App;
