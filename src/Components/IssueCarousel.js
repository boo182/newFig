import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/carousel.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
// pictures Analepse
import zero from '../assets/images/analepse/n°0-.jpg'
import one from '../assets/images/analepse/n°0--1.jpg'
import two from '../assets/images/analepse/n°0--2.jpg'
import three from '../assets/images/analepse/n°0--3.jpg'
import four from '../assets/images/analepse/n°0--4.jpg'


export default class IssueCarousel extends Component {
  state = {
    counter: 0,
  }

  nextImage = (list) => {
    const { counter } = this.state;    
    if( counter === list.length - 1 ) {
      this.setState({ counter: 0});
    } else {
      this.setState({ counter: counter + 1});      
    }
  }

  // renderImage = (list) => {
  //   const { counter } = this.state;
  //   return <img src={list[counter]} alt={list[counter]} className="carouselPictures"/>;
  // }

  // renderNextImage = (list) => {
  //   const { counter } = this.state;
  //   if( counter === list.length - 1 ) {
  //     return <img src={list[0]} alt={list[0]} className="carouselPictures"/>;
  //   } else {
  //     return <img src={list[counter + 1]} alt={list[counter + 1]} className="carouselPictures"/>;     
  //   }
  // }

  getImages = () => {
    const { issue } = this.props;
    if(issue === 'analepse') {
      return [zero, one, two, three, four];
    }
  }
  render() {
   const { issue } = this.props;
  
    return (
        <Slider>
          {this.getImages().map((article, index) =>
          <div key={index} className="carouselContainer">
            <img src={article} className="carouselPictures"/>
          </div>)}
        </Slider>
    )
  }
}
