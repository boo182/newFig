import React, { Component, Fragment } from 'react';
import data from '../assets/texts.json';
import * as images from '../assets/images/images';
import './styles/shopIssueDetail.css';

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
         <div className="shopDetailPres">
         <div className="shopIssuePresTitle">{`${datas.issueNumber} ${datas.pageTitle}`}</div>
         <div>{datas.presentation}</div>
         </div>
          
          <div className="middleColumn">
          <Fragment>
            <div>
              {datas.details.map(item => <div key={item} className="detailDiv">{item}</div>)}
            </div>
          </Fragment>
          </div>
          <div className="rightColumn">
            <img className="shopDetailPicture" src={this.state.image} alt={this.state.image} />
          </div>
        </div>
      </div>
    );
  }
}
