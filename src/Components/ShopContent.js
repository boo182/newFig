import React, { Component } from 'react'
import { shopImages } from '../assets/images/images';
import data from '../assets/texts'
import './styles/shopContent.css';

export default class ShopContent extends Component {
    state = {
        showIssueDetails: false,
    }
  
    getIssues = () => {
        const test = shopImages.map((item, index) => {
            const datas = data.pages[item.name];
            const { showIssueDetails } = this.state;
            return (
            <div>
                <div className="hoveredImg" >
                    <div className="bigFont">n°<span>{datas.number}</span></div>
                    <div className="bigFont">{datas.pageTitle}</div>
                    <div className="issuePrice">{datas.price}</div>                 
                </div>
                <img src={item.img} alt={item.img} className="shopItem" />
            </div>)
        });
       return test; 
    }
  render() {
    return (
      <div className="issueWrapper">
        <div style={{ width: '400px', height: '200px' }}></div> 
        {this.getIssues()}
      </div>
    )
  }
}
