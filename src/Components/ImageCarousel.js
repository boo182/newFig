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

        return [
            ...analepse,
            [<IssueDetails name={"analepse"} />],
            ...hypotytose,
            [<IssueDetails name={"analepse"} />],
            ...prosopopee,
            [<IssueDetails name={"analepse"} />]
        ];
    }
    afterChange = e => {
        const { setTitle } = this.props;
        const analepse = images.analepse.length + 1;
        const hypotytose = images.hypotytose.length + 1;
        const prosopopee = images.prosopopee.length + 1;
        
        if(e < analepse && e >= 0) setTitle('analepse');
        if(e >= analepse) setTitle('prosopopee');
        if(e >= (analepse + hypotytose)) setTitle('hypotytose');
        
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
            <Slider {...settings} className="slider" afterChange={e => this.afterChange(e)}>
                {images.map((item, index) =>{
                    if(typeof item === 'object') {
                        return <div className="details" key={index}>{item}</div>
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
