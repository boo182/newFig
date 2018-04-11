import React, { Component } from 'react';
import TitleBackground from '../Components/TitleBackground';
import ImagesScroll from '../Components/ImagesScroll';

export default class Home extends Component {

  componentWillMount() {
    this.props.getActualPage('home');
  }
  render() {
    return (
      <div>
        <TitleBackground />
        <ImagesScroll />
      </div>
    )
  }
}

