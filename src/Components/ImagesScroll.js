import React, { Component, Fragment } from 'react';
import './styles/imagesScroll.css';

import { homePics } from '../assets/images/images';

export default class ImagesScroll extends Component {
    
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
      const images = this.imageBlock(homePics);
   
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
