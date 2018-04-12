import React, { Component, Fragment } from 'react';
import './styles/imagesScroll.css';

import { Carousel } from 'react-responsive-carousel';
import { analepse } from '../assets/images/images';
import { hypotytose } from '../assets/images/images';
import { prosopee } from '../assets/images/images';

export default class ImagesScroll extends Component {
    getImages = () => {
        const { pictures } = this.props;

        if(pictures === 'analepse') {
          return analepse;
        }
        if(pictures === 'hypotytose') {
          return hypotytose;
        }
        if(pictures === 'prosopee') {
          return prosopee;
        }
        if(pictures === 'home') {
            return analepse.concat(hypotytose, prosopee);
        }
      }
  imageBlock = (images) => {
    let array = [];
    let subArray = [];
    images.forEach((item, index) => {
        subArray.push(item);
        if(index !== 0 && (index + 1) % 3 === 0) {
            array.push(subArray);
            subArray = [];
            console.log(array);
        }
        if (index === images.length - 1) {
            array.push(subArray);
        }
    });
     return array;
  }    
  render() {
      const { pictures } = this.props;
      const images = this.imageBlock(this.getImages());
   
    return (
      <div className="imageScrollWrapper" style={{ width: this.props.width }}>

        {images.map(item =>
        <Fragment>
            <div className="imageBolck">
                <div className="imageLine">
                    <img className="image" src={item[0]} />
                    <img className="image" src={item[1]} />
                </div>
            </div>
            <div className="singleImage">
                <img className="imageBottom" src={item[2]} />
            </div>
        </Fragment>
    )}
       

      </div>
    )
  }
}
