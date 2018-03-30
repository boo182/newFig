import React, { Component } from 'react';
import './App.css';
import TitleBackground from './Components/TitleBackground';
import ImagesScroll from './Components/ImagesScroll';
import Menu from './Components/Menu';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="Content">
          <TitleBackground />
          <ImagesScroll />
        </div>
        <Menu />
      </div>
    );
  }
}

export default App;
