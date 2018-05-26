import React, { Component } from 'react'
import "./styles/imageCarousel.css";
import * as images  from '../assets/images/images';
import Slider from "react-slick";
import IssueDetails from './IssueDetails';
import { NavLink } from 'react-router-dom';


export default class ImageCarousel extends Component {
    state = {
        displayDetails: false,
        issue: 0,
    }

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

    smallScreenDisplayer = () => {
        const analepse = { img: images.analepse[0], name: 'analepse', number: 0 };
        const hypotytose = { img: images.hypotytose[0], name: 'hypotytose', number: 1 };
        const prosopopee = { img: images.prosopopee[0], name: 'prosopopee', number: 2 };
        const pleonasme = { img: images.pleonasme[0], name: 'pleonasme', number: 3 };
        const paradoxe = { img: images.paradoxe[0], name: 'paradoxe', number: 4 };
        return [analepse, prosopopee, hypotytose, paradoxe, pleonasme];
    }

  render() {
      const images = this.getIssues();
      const smallScreenImages = this.smallScreenDisplayer();

      var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      
    return (
        <div className="CarouselWrapper">
            <Slider {...settings} className="slider" afterChange={e => this.afterChange(e)}>
                {images.map((item, index) => {
                    if(typeof item === 'object') {
                        return <div className="details" key={`${item}-index`}>{item}</div>
                    }
                    return (<div key={item}>
                        <img className="issueImages" src={item} alt={item} />
                    </div>)

                  }
                )}
            </Slider>
            
            <div className="verticalScroll">
                {smallScreenImages.map((item, index) => {
                        return (
                        <NavLink to={`/issues/${item.name}`} key={`item-${item.name}`} >
                            <div>    
                                <img className="smallDisplayImages" key={item.name} src={item.img} alt={item.img} />
                            </div>
                        </NavLink>
                        )
                      }
                    )}
            </div>
        </div>
    )
  }
}
