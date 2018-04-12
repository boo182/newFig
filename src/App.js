import React, { Component } from 'react';
import './App.css';
import Edition from './Container/Edition';
import Home from './Container/Home';
import Menu from './Container/Menu';
import TitleBackground from './Components/TitleBackground';
import Collection from './Container/Collection'
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route'

class App extends Component {
  state = {
    actualPage: '',

  }
  
   getActualPage = (page) => this.setState({ actualPage: page });


  render() {
    return (
        <Router>
              <div className="App">
                <TitleBackground display={this.state.actualPage === 'home'}/>              
                  <Menu className="menu" actualPage={this.state.actualPage}/>
                  <div className="Content">
                    <Route path="/" exact
                      render={(params) =>
                        <Home params={params} getActualPage={this.getActualPage} />
                    }>
                    </Route>
                    <Route path="/edition" exact
                      render={(params) =>
                        <Edition params={params} getActualPage={this.getActualPage} />
                    }>
                      </Route>
                    <Route path="/collection/:issue"
                      render={(params) =>
                        <Collection params={params} getActualPage={this.getActualPage} />
                    }>
                    </Route>
                  </div>
              </div>
          </Router>
    );
  }
}

export default App;
