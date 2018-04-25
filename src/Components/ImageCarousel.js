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
        const pleonasme = images.pleonasme;
        const paradoxe = images.paradoxe;

        return [
            ...pleonasme,
            [<IssueDetails name={"pleonasme"} />],
            ...paradoxe,
            [<IssueDetails name={"paradoxe"} />],
            ...prosopopee,
            [<IssueDetails name={"prosopopee"} />],
            ...hypotytose,
            [<IssueDetails name={"hypotytose"} />],
            ...analepse,
            [<IssueDetails name={"analepse"} />],
        ];
    }
    afterChange = e => {
        const { setTitle } = this.props;
        const hypotytose = images.hypotytose.length + 1;
        const prosopopee = images.prosopopee.length + 1;
        const paradoxe = images.paradoxe.length + 1;
        const pleonasme = images.pleonasme.length + 1;
        
        if(e < pleonasme && e >= 0) setTitle('pleonasme');
        if(e >= pleonasme) setTitle('paradoxe');
        if(e >= (pleonasme + paradoxe)) setTitle('hypotytose');
        if(e >= (pleonasme + paradoxe + hypotytose)) setTitle('prosopopee');
        if(e >= (pleonasme + paradoxe + hypotytose + prosopopee)) setTitle('analepse');
        
        
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
                        return <div className="details" key={`${item}-index`}>{item}</div>
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
