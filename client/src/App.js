import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import LibraryPage from './pages/LibraryPage';

function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/search" component={SearchPage} />
          <Route path="/library" component={LibraryPage} />
        </Switch>
    </div>
  );
}

export default App;
