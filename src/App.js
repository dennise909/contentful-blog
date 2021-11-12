import React from 'react';
import './App.css';
import Posts from './pages/Posts';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
      
      <main className="App">
        <div>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/posts' component={Posts}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/about' component={About}/>
        </Switch>
        </div>
      </main>
  );
}


export default App;
