import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/carousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// pictures Analepse
import { Carousel } from 'react-responsive-carousel';
import { analepse } from '../assets/images/images';
import { hypotytose } from '../assets/images/images';
import { prosopee } from '../assets/images/images';



export default class IssueCarousel extends Component {


  getImages = () => {
    const { issue } = this.props;
    if(issue === 'analepse') {
      return analepse;
    }
    if(issue === 'hypotytose') {
      return hypotytose;
    }
    if(issue === 'prosopee') {
      return prosopee;
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
