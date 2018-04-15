import React, { Component } from 'react'
import "./styles/imageCarousel.css";
import * as images  from '../assets/images/images';
import Slider from "react-slick";
import IssueDetails from './IssueDetails';

export default class ImageCarousel extends Component {

    getIssues = () => {
        const analepse = images.analepse;
        const hypotytose = images.hypotytose;
        const prosopopee = images.prosopopee;

        return [...analepse, [<IssueDetails name={"analepse"}/>]];
    }
  render() {
      const images = this.getIssues();
      var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className="CarouselWrapper">
            <Slider {...settings} className="slider">
                {images.map(item =>{
                    if(typeof item === 'object') {
                        return <div className="details">{item}</div>
                    }
                    return (<div>
                        <img className="issueImages" key={item} src={item} alt={item} />
                    </div>)

                }
                )}
            </Slider>
        </div>
    )
  }
}
