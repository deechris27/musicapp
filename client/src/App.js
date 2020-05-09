import React from 'react';
import './App.scss';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import LibraryPage from './pages/LibraryPage';
import LeftNav from './components/LeftNav.Component';
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import PlaylistPage from './pages/PlayList';

function App() {
  return (
    <React.Fragment>
    <div className="outerwrap">
      <div className="App">
        <LeftNav />
        <div className="main">
          <div className="upperNav">Deepak's Music App</div>
          <div className="mainContent">
            <Switch>
              <Route path="/" exact component={HomePage}/>
              <Route path="/search" component={SearchPage} />
              <Route path="/library" component={LibraryPage} />
              <Route path="/Playlist" component={PlaylistPage} />
            </Switch>
          </div>
        </div>
       </div>
       <MusicPlayer />
    </div>
    </React.Fragment>
  );
}

export default App;
