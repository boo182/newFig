import React, { Component, Fragment } from 'react'
import { shopImages } from '../assets/images/images';
import data from '../assets/texts'
import './styles/shopContent.css';
import ShopIssueDetails from './ShopIssueDetails';

export default class ShopContent extends Component {
    state = {
        showIssueDetails: false,
        issueToDisplay: '',
    }
  
    getIssues = () => {
     const test = shopImages.map((item, index) => {
     const datas = data.pages[item.name];
     const { showIssueDetails } = this.state;
     
    return (
            <div  key={`item-${index}`} onClick={() =>
                this.setState({
                    showIssueDetails: !showIssueDetails,
                    issueToDisplay: item.name 
                })}>
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
    const { showIssueDetails } = this.state;      
    return (
      <div className="issueWrapper">
        
        {!showIssueDetails ? 
        <Fragment>
            <div style={{ width: '400px', height: '200px' }}></div> 
            {this.getIssues()}
        </Fragment>
        :
        <ShopIssueDetails issue={this.state.issueToDisplay} />}
      </div>
    )
  }
}
