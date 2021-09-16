import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import './App.scss';

import About from './pages/About/About';
import SignIn from './pages/Auth/SignIn';
import Home from './pages/Home/Home';
import VideoPlayer from './pages/Video/VideoPlayer';
import Playlist from './pages/Playlist/Playlist';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <main>
          <Switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/about" exact>
              <About/>
            </Route>
            <Route path="/VideoPlayer" exact>
              <VideoPlayer/>
            </Route>
            <Route path="/Playlist" exact>
              <Playlist/>
            </Route>
            <Route path="/SignIn" exact>
              <SignIn/>
            </Route>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </>
  );
}

export default App;
