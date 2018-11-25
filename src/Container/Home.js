import React, { Component } from 'react';
import ImagesScroll from '../Components/ImagesScroll';

export default class Home extends Component {

  componentWillMount() {
    this.props.getActualPage('home');
  }
  render() {
    return (
      <div >
        <ImagesScroll pictures={'home'} style={{ overflow: 'hidden' }}/>
      </div>
    )
  }
}

