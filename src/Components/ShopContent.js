import React, { Component, Fragment } from 'react'
import { shopImages } from '../assets/images/images';
import data from '../assets/texts'
import './styles/shopContent.css';
import ShopIssueDetails from './ShopIssueDetails';
import { NavLink } from 'react-router-dom';


export default class ShopContent extends Component {
    state = {
        showIssueDetails: false,
        issueToDisplay: '',
    }
  
    getIssues = () => {
     const { showIssueDetails } = this.state;

     const shop = shopImages.map((item, index) => {
     const datas = data.pages[item.name];
    return (
        <NavLink to={`/issues/${item.name}`} key={`item-${index}`} onClick={() => this.props.showOrderButton(true)}>
            <div  id={`image${index}`} onClick={() =>
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
            </div>
            </NavLink>)
        });
       return shop; 
    }
  render() {
    const { showIssueDetails } = this.state;      
    return (
      <div className="issueWrapper">
            <div style={{ width: '400px', height: '200px' }}></div> 
            {this.getIssues()}
      </div>
    )
  }
}
