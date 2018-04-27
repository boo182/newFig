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

const history = createHistory();
class App extends Component {
  state = {
    actualPage: '',
    issue: '',
  }
  
   getActualPage = (page) => {
     this.setState({ actualPage: page });
   }
   getIssue = (issue) => {
     this.setState({ issue })
   }


  render() {
  
    return (
        <Router history={history}>
              <div className="App">
                  <Menu className="menu" actualPage={this.state.actualPage} issue={this.state.issue}/>
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
                        <Collection params={params} getActualPage={this.getActualPage} getIssue={this.getIssue}/>
                      }>
                    </Route>
                    <Route path="/boutique"
                      render={(params) =>
                        <Shop params={params} getActualPage={this.getActualPage} />
                      }>
                    </Route>
                    <Route path="/issues/:issue"
                      render={(params) =>
                        <IssueDetail params={params} getActualPage={this.getActualPage} getIssue={this.getIssue} />
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
