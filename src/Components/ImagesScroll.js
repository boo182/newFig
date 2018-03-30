import React, { Component } from 'react';
import './styles/imagesScroll.css';
import url from '../assets/images/édition-fig.-4.jpg';
import url2 from '../assets/images/édition-fig.-6-lightbox.jpg';

export default class ImagesScroll extends Component {
  render() {
      const images = [url, url, url, url, url];
      console.log(images);
    return (
      <div className="wrapper" style={{ width: this.props.width }}>
        <div className="imageBolck">
            <div className="imageLine">
                <img className="image" src={images[0]} />
                <img className="image" src={url2} />
            </div>
        </div>
        <div className="singleImage">
            <img className="imageBottom" src={images[0]} />
        </div>
        <div className="imageBolck">
            <div className="imageLine">
                <img className="image" src={images[0]} />
                <img className="image" src={url2} />
            </div>
        </div>
        <div className="singleImage">
            <img className="image" src={images[0]} />
        </div>

      </div>
    )
  }
}
