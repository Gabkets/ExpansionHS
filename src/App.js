import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './components/Cards';
import Heroes from './components/Heroes';
import Logo from './components/Logo';
import MainNav from './components/MainNav';
import Media from './components/Media';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="snow"></div>
        <div className="App-container">
          <Logo />
          <BrowserRouter>
            <div>
              <MainNav />
              <Route path="/cards" component={Cards} />
              <Route path="/heroes" component={Heroes}/>
              <Route path="/media" component={Media}/>
            </div>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
