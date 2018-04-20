import React, { Component, Fragment } from 'react';
import data from '../assets/texts.json';
import * as images from '../assets/images/images';
import './styles/shopIssueDetail.css';
import OrderIssue from './OrderIssue';

export default class ShopIssueDetails extends Component {
  state = {
    datas: data.pages[this.props.issue],
    image: images[this.props.issue][0],
  }
  render() {
    const { datas } = this.state;
    return (
      <div>
        <div className="shopDetailWrapper">
          <div className="leftColumn">
            <img className="shopDetailPicture" src={this.state.image} alt={this.state.image} />
            
          </div>
          <div className="middleColumn">
          <Fragment>
            <div>
              {datas.details.map(item => <div key={item} className="detailDiv">{item}</div>)}
            </div>
            <div className="shopOrderIssue" onClick={() => console.log('hello')}>commander</div>
          </Fragment>
          </div>
          <div className="titleColumn">{datas.pageTitle}</div>
        </div>
        <div className="shopDetailPres">{datas.presentation}</div>
      </div>
    );
  }
}
