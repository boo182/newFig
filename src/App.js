import React, { Component } from 'react';
import './App.css';
import Edition from './Container/Edition';
import Home from './Container/Home';
import Menu from './Container/Menu';
import Collection from './Container/Collection'
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <div className="Content">
              <Route path="/" exact component={Home} />
              <Route path="/edition" exact component={Edition} />
              <Route path="/collection/:issue" component={Collection} />
            </div>
            <Menu className="menu"/>
        </div>
      </Router>
    );
  }
}

export default App;
