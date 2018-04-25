import React, { Component } from 'react'
import { shopImages } from '../assets/images/images';
import data from '../assets/texts'
import './styles/shopContent.css';
import { NavLink } from 'react-router-dom';


export default class ShopContent extends Component {
    state = {
        issueToDisplay: '',
    }
  
    getIssues = () => {

    const shop = shopImages.map((item, index) => {
    const datas = data.pages[item.name];
    return (
        <NavLink to={`/issues/${item.name}`} key={`item-${index}`}>
            <div  id={`image${index}`} onClick={() =>
                this.setState({ issueToDisplay: item.name })}>
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
    return (
      <div className="issueWrapper">
            <div style={{ width: '400px', height: '200px' }}></div> 
            {this.getIssues()}
      </div>
    )
  }
}
