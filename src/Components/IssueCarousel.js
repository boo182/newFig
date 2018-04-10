import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/carousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// pictures Analepse
import zero from '../assets/images/analepse/n°0-.jpg'
import one from '../assets/images/analepse/n°0--1.jpg'
import two from '../assets/images/analepse/n°0--2.jpg'
import three from '../assets/images/analepse/n°0--3.jpg'
import four from '../assets/images/analepse/n°0--4.jpg'
import { Carousel } from 'react-responsive-carousel';


export default class IssueCarousel extends Component {


  getImages = () => {
    const { issue } = this.props;
    if(issue === 'analepse') {
      return [zero, one, two, three, four];
    }
  }
  render() {
   const { issue } = this.props;
    const carouselOptions = {
      showStatus: false,
      showIndicators: false,
      showThumbs: false,
      infiniteLoop: true,
      useKeyboardArrows: true,
      transitionTime: 1000,
    }

    return (
        <Carousel showArrows={true} className="carouselContainer" {...carouselOptions}>
          {this.getImages().map((article, index) =>
            <img src={article} className="carouselPictures"/>)}
        </Carousel>
    )
  }
}
