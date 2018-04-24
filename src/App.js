import React, { Component } from 'react';
import './App.css';
import Edition from './Container/Edition';
import Home from './Container/Home';
import Menu from './Container/Menu';
import Shop from './Container/Shop';
import TitleBackground from './Components/TitleBackground';
import Collection from './Container/Collection'
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route'
import Bookstore from './Container/Bookstore';
import IssueDetail from './Container/IssueDetail';

class App extends Component {
  state = {
    actualPage: '',
  }
  
   getActualPage = (page) => {
     console.log(page);
     this.setState({ actualPage: page });
   }


  render() {
  
    return (
        <Router>
              <div className="App">
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
                    <Route path="/collection"
                      render={(params) =>
                        <Collection params={params} getActualPage={this.getActualPage} />
                      }>
                    </Route>
                    <Route path="/boutique"
                      render={(params) =>
                        <Shop params={params} getActualPage={this.getActualPage} />
                      }>
                    </Route>
                    <Route path="/issues/:issue"
                      render={(params) =>
                        <IssueDetail params={params} getActualPage={this.getActualPage} />
                      }>
                    </Route>
                    <Route path="/librairies"
                      render={(params) =>
                        <Bookstore params={params} getActualPage={this.getActualPage} />
                      }>
                    </Route>
                  </div>
                  <TitleBackground display={this.state.actualPage === 'home'}/>              
              </div>
          </Router>
    );
  }
}

export default App;
