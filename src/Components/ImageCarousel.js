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
        pageNumber: 1,
        x: 0,
        y: 0,
    }
      _onMouseMove = (e) => {
        this.setState({ x: e.screenX, y: e.screenY });
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
        this.setState({ pageNumber: e + 1 })
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
    generatePageNumber = (index) => index;
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
        <div className="CarouselWrapper"
          style={{ backgroundColor: 'transparent', cursor: this.state.x > 2970 ? 'w-resize' : 'e-resize'}}
          onMouseMove={this._onMouseMove}
        >
            <div className="pageIndex">{this.state.pageNumber}/{images.length}</div>
            <Slider {...settings} className="slider" afterChange={e => this.afterChange(e)} style={{ height: '800px' }}>
                {images.map((item, index) => {
                    if(typeof item === 'object') {
                        return <div className="details" key={`${index}`}>{item}</div>
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
                        <NavLink to={`/issues/${item.name}`} key={`item-${item.img}-${index}`} >
                            <div>
                                <img className="smallDisplayImages" src={item.img} alt={item.img} />
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
