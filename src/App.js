import React from 'react';
import './App.css';
import Container from './components/Container';
import Favorites from './components/Favorites';
import Home from './components/Home';
import Media from './components/Media';
import MediaCard from './components/MediaCard';
import NavBar from './components/NavBar';
import NavBarLinks from './components/NavBarLinks';
import Search from './components/Search';
import SearchBar from './components/SearchBar';


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
      <NavBar />
      <Route path='/home' exact render={() => <Home />}/>
      <Route path='/search' exact render={() => <Search />}/>
      <Route path='/favorites' exact render={() => <Favorites />}/>
      <Route path='/favorite/:id' exact render={({ match }) => <Media match={match} />}/>
        
      </div>
    </Router>
  );
}

export default App;
