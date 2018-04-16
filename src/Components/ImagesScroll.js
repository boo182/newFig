import React, { Component, Fragment } from 'react';
import './styles/imagesScroll.css';

import { analepse } from '../assets/images/images';
import { hypotytose } from '../assets/images/images';
import { prosopopee } from '../assets/images/images';

export default class ImagesScroll extends Component {
    getImages = () => {
        const { pictures } = this.props;

        if(pictures === 'analepse') {
          return analepse;
        }
        if(pictures === 'hypotytose') {
          return hypotytose;
        }
        if(pictures === 'prosopopee') {
          return prosopopee;
        }
        if(pictures === 'home') {
            return analepse.concat(hypotytose, prosopopee);
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
        }
        if (index === images.length - 1) {
            array.push(subArray);
        }
    });
     return array;
  }    
  render() {
      const images = this.imageBlock(this.getImages());
   
    return (
      <div className="imageScrollWrapper" style={{ width: this.props.width }}>

        {images.map(item =>
        <Fragment key={item}>
            <div className="imageBolck">
                <div className="imageLine">
                    <img className="image" src={item[0]} alt={item[0]}/>
                    <img className="image" src={item[1]} alt={item[1]}/>
                </div>
            </div>
            <div className="singleImage">
                <img className="imageBottom" src={item[2]} alt={item[2]}/>
            </div>
        </Fragment>
    )}
       

      </div>
    )
  }
}
